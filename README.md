# 🌞 SolYield Field Companion App

## 📌 Project Overview

The **SolYield Field Companion** is a professional-grade React Native application developed for the **SolYield Mobile Migration Hackathon**.

It serves as the **Ultimate Field Companion** for technicians like Arjun, enabling:

- 📡 Offline data persistence  
- 📍 GPS-validated site check-ins  
- 📄 Automated report generation  

Designed specifically for remote solar farms where internet connectivity may be unavailable.

---

## 🏗️ Technical Stack & Architecture

This project strictly follows the mandatory technical guidelines:

- **Language:** TypeScript (Strict Mode preferred)  
- **Framework:** React Native (Expo Managed Workflow)  
- **State Management:** Redux Toolkit  
- **Navigation:** Expo Router (File-based routing)  
- **Offline Database:** WatermelonDB  
- **Styling:** Nativewind (TailwindCSS for React Native)  

---

## 📁 File Structure

The project follows a modular **Clean Architecture** pattern:

```text
SOLYIELDAPP/
├── app/                      # Expo Router - Navigation & Screens
│   ├── (tabs)/               # Main Tab Navigation
│   │   ├── index.tsx         # Level 1.3: Interactive Maps & Navigation
│   │   ├── agenda.tsx        # Level 1.1: Technician Schedule & Calendar Sync
│   │   └── report.tsx        # Level 1.4: Analytics & PDF Generation
│   ├── _layout.tsx           # Global Providers (Redux, NetInfo)
│   └── modal.tsx             # System Information & Versioning
│
├── components/               # Reusable Modular Components
│   ├── FormRenderer.tsx      # Level 2.1: Dynamic Schema-based Form Rendering
│   ├── OfflineBanner.tsx     # Connectivity Status Indicator
│   └── SiteCard.tsx          # Reusable Site Summary UI
│
├── constants/                # Mock Data (TypeScript)
│   ├── sites.ts
│   ├── schedule.ts
│   ├── chartData.ts
│   └── formSchema.ts
│
├── store/                    # Redux & Persistence Logic
│   ├── store.ts
│   ├── visitSlice.ts
│   └── schema.ts             # WatermelonDB Offline Schema
│
└── utils/                    # Helper Functions
    ├── geoUtils.ts           # 500m Radius Validation
    ├── dataTransformer.ts    # Chart Data Flattening
    └── pdfGenerator.ts       # PDF Generation Logic
```

---

## ⚙️ Installation & Setup

Run the following commands to set up the development environment:

```bash
# Install required Expo modules and libraries
npx expo install expo-location expo-calendar expo-print expo-sharing \
react-native-maps react-native-gifted-charts \
@reduxjs/toolkit react-redux nativewind tailwindcss \
@react-native-community/netinfo

# Install TypeScript type definitions
npm install --save-dev @types/react-native

# Start the development server (clear cache)
npx expo start -c
```

---

## 🚀 Core Features & Rubric Compliance

### 🔹 Level 1: The Connected Technician

- **Google Calendar Sync** – Syncs assigned visits to the device’s native calendar.  
- **Geolocation Check-in** – Captures GPS coordinates and validates presence within a 500m radius of the site.  
- **Interactive Maps** – Displays assigned sites with native map pins and navigation support.  
- **PDF Report Card** – Generates detailed PDF summaries including Bar and Pie charts using `expo-print` and `react-native-gifted-charts`.  

---

### 🔹 Level 2: The Offline Warrior

- **Offline Persistence ("Black Box")** – Implements local data storage using WatermelonDB.  
- **Sync-on-Reconnect** – Automatically syncs offline forms once network connectivity is restored.  
- **Media Handling** – Captures and stores image paths in the offline database for later synchronization.  

---

## 🏆 Hackathon Submission

Developed for the **SolYield Mobile Migration Hackathon**  
Confidential | CLIMAI CLEANTECH PVT LTD  
