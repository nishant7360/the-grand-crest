import { useForm } from "react-hook-form";
import Button from "../../ui/Button";
import Form from "../../ui/Form";
import FormRow from "../../ui/FormRow";
import Input from "../../ui/Input";

import { useUpdateuser } from "./useUpdateuser";
import { useNavigate } from "react-router-dom";

function UpdatePasswordForm() {
  const { register, handleSubmit, formState, getValues, reset } = useForm();
  const { errors } = formState;
  const navigate = useNavigate();

  const { updateUser, isUpdating } = useUpdateuser();

  function onSubmit({ currentPassword, newPassword }) {
    updateUser(
      { currentPassword, newPassword },
      {
        onSuccess: () => {
          reset;
          navigate("/login");
        },
      },
    );
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FormRow
        label="Current password"
        error={errors?.currentPassword?.message}
      >
        <Input
          type="password"
          autoComplete="current-password"
          disabled={isUpdating}
          {...register("currentPassword", {
            required: "Current password is required",
          })}
        />
      </FormRow>

      <FormRow
        label="New Password (min 8 characters)"
        error={errors?.newPassword?.message}
      >
        <Input
          type="password"
          autoComplete="new-password"
          disabled={isUpdating}
          {...register("newPassword", {
            required: "This field is required",
            minLength: {
              value: 8,
              message: "Password needs a minimum of 8 characters",
            },
          })}
        />
      </FormRow>

      <FormRow
        label="Confirm new password"
        error={errors?.passwordConfirm?.message}
      >
        <Input
          type="password"
          disabled={isUpdating}
          {...register("passwordConfirm", {
            required: "This field is required",
            validate: (value) =>
              getValues().newPassword === value || "Passwords need to match",
          })}
        />
      </FormRow>

      <FormRow>
        <Button onClick={reset} type="reset" variation="secondary">
          Cancel
        </Button>
        <Button disabled={isUpdating}>Update password</Button>
      </FormRow>
    </Form>
  );
}

export default UpdatePasswordForm;
