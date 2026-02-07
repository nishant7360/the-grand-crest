import supabase from "./supabase";

export async function getCabins() {
  const { data, error } = await supabase.from("Cabins").select("*");

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be loaded");
  }

  return data;
}

export async function createEditCabin(newCabin, id) {
  const supabaseUrl = "https://phlkbcxiqwkconnumsvo.supabase.co";
  const hasImage = newCabin.image?.startsWith?.(supabaseUrl);

  const imageName = `${Math.random()}-${newCabin.image.name}`.replaceAll(
    "/",
    "",
  );
  const imagePath = hasImage
    ? newCabin.image
    : `${supabaseUrl}/storage/v1/object/public/cabin-images/${imageName}`;

  //1) first create the cabin
  //create / edit
  let query = supabase.from("Cabins");

  //create cabin
  if (!id) {
    query = query.insert([{ ...newCabin, image: imagePath }]);
  }
  //edit cabin

  if (id) {
    query = query.update([{ ...newCabin, image: imagePath }]).eq("id", id);
  }

  const { data, error } = await query.select().single();

  if (error) {
    console.error(error);
    throw new Error("Cabin could not be created/edited");
  }

  //2) upload the image
  if (!hasImage) {
    const { error: storageError } = await supabase.storage
      .from("cabin-images")
      .upload(imageName, newCabin.image);

    if (storageError) {
      //3) delete cabin incase image is not uploaded properl
      if (!id) {
        await supabase.from("Cabins").delete().eq("id", data.id);
      }
      console.error(storageError);
      throw new Error("Image could not be uploaded");
    }
  }

  return data;
}

export async function deleteCabin(id) {
  const { data, error } = await supabase.from("Cabins").delete().eq("id", id);

  if (error) {
    console.log(error);
    throw new Error("Cabins could not be deleted");
  }
  return data;
}
