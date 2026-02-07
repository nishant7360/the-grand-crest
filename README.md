# 🏨 The Grand Crest

A modern hotel management web application designed to streamline hotel operations and enhance guest experience management.

![React](https://img.shields.io/badge/React-18+-61DAFB?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-Latest-646CFF?style=flat&logo=vite&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?style=flat&logo=supabase&logoColor=white)

## 📋 Overview

The Grand Crest is a comprehensive hotel management system that empowers hotel staff to efficiently manage daily operations. From guest check-ins to performance analytics, this application provides all the essential tools needed to run a modern hotel.

Built with React and Vite for a blazing-fast frontend experience, and powered by Supabase for robust backend infrastructure, The Grand Crest offers real-time data synchronization and a seamless user experience.

## ✨ Features

### 👥 Guest & Booking Management

- **Check-in/Check-out System**: Streamlined guest arrival and departure processes
- **Guest Status Tracking**: Monitor current guest stays in real-time
- **Booking Management**: Create, update, and manage reservations
- **Service Add-ons**: Add breakfast and other services to existing bookings
- **Guest History**: Track previous stays and preferences

### 📊 Analytics Dashboard

- **Performance Metrics**: Comprehensive hotel performance insights
- **Time-based Analytics**:
  - Last 7 days
  - Last 30 days
  - Last 90 days
- **Key Statistics**:
  - Total bookings
  - Total stays
  - Total nights booked
  - Occupancy rates
  - Revenue tracking
- **Visual Representations**: Interactive charts and pie graphs using Recharts

### 🔐 Authentication & Security

- Secure authentication powered by Supabase
- Role-based access control
- Protected routes and data

### 🔄 Real-time Updates

- Live data synchronization
- Instant UI updates on database changes
- Optimistic UI updates for better UX

## 🛠️ Tech Stack

### Frontend

- **React 18+** - Modern UI library with hooks and context
- **Vite** - Next-generation frontend tooling for lightning-fast builds
- **Styled Components / CSS** - Component-scoped styling
- **Recharts** - Composable charting library for analytics
- **React Router** - Client-side routing
- **React Query / Context API** - State management and data fetching

### Backend & Services

- **Supabase** - Complete backend solution
  - PostgreSQL Database
  - RESTful API
  - Authentication
  - Real-time subscriptions
  - Row Level Security (RLS)

### Development Tools

- **ESLint** - Code quality and consistency
- **Git & GitHub** - Version control
- **npm** - Package management

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Supabase account (for backend setup)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/nishant7360/the-grand-crest.git
   cd the-grand-crest
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Environment Setup**

   Create a `.env` file in the root directory and add your Supabase credentials:

   ```env
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

4. **Run the development server**

   ```bash
   npm run dev
   ```

5. **Open your browser**

   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder, ready for deployment.

## 📁 Project Structure

```
the-grand-crest/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable React components
│   ├── features/        # Feature-based modules
│   ├── pages/          # Page components
│   ├── services/       # API services and Supabase integration
│   ├── hooks/          # Custom React hooks
│   ├── context/        # React context providers
│   ├── utils/          # Utility functions
│   ├── styles/         # Global styles
│   ├── App.jsx         # Main app component
│   └── main.jsx        # Application entry point
├── .eslintrc.cjs       # ESLint configuration
├── .eslintrc.json      # Additional ESLint rules
├── .gitignore          # Git ignore file
├── index.html          # HTML template
├── package.json        # Project dependencies
├── vite.config.js      # Vite configuration
└── README.md           # Project documentation
```

## 🎯 Use Cases

- **Hotel Front Desk**: Manage guest check-ins and check-outs efficiently
- **Hotel Management**: Monitor hotel performance and occupancy rates
- **Service Coordination**: Track and manage additional services for guests
- **Analytics & Reporting**: Generate insights for business decision-making

## 🔮 Future Enhancements

- 🌐 Multi-language support
- 📱 Mobile application
- 💳 Integrated payment processing
- 📧 Automated email notifications
- 🧾 Invoice generation and management
- 👔 Housekeeping management module
- 🍽️ Restaurant and room service integration
- 📱 Guest mobile app for self-service

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Nishant**

- GitHub: [@nishant7360](https://github.com/nishant7360)

## 🙏 Acknowledgments

- Supabase team for the excellent backend platform
- React and Vite communities for amazing tools
- All contributors who help improve this project

---
