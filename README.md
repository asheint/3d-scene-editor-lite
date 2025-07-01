# 3D Scene Editor Lite

A lightweight 3D scene editor built with React Three Fiber, TypeScript, and Vite that allows users to create, manipulate, and manage basic 3D scenes.

## Features

### Core Functionality

- **3D Canvas Setup**: Interactive 3D environment with orbit controls and lighting
- **Object Creation**: Add cubes and spheres to the scene
- **Object Selection**: Click-to-select objects with visual feedback
- **Transform Controls**: Move, rotate, and scale objects along X, Y, Z axes
- **Scene Persistence**: Save scenes as JSON files and load them back
- **Real-time Updates**: Live position, rotation, and scale display

### Bonus Features Implemented

- **Delete Functionality**: Remove selected objects from the scene
- **Ground Plane with Shadows**: Realistic shadow casting on ground plane
- **Enhanced Selection UX**: Visual highlighting with animated outline effects

## Tech Stack

- **React 18** with TypeScript
- **React Three Fiber** (@react-three/fiber) - React renderer for Three.js
- **Drei** (@react-three/drei) - Useful helpers for R3F
- **Three.js** - 3D graphics library
- **Vite** - Fast build tool and development server

## Installation & Setup

1. **Clone the repository**

   ```bash
   git clone https://github.com/asheint/3d-scene-editor-lite.git
   cd 3d-scene-editor-lite
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Build for production**

   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## How to Use

1. **Adding Objects**: Click on the Cube or Sphere icons in the editor panel to add objects to the scene
2. **Selecting Objects**: Click directly on any object in the 3D scene to select it
3. **Moving Objects**: Use the directional arrow buttons to move the selected object along X, Y, Z axes
4. **Rotating Objects**: Use the rotation controls to rotate the selected object around each axis
5. **Scaling Objects**: Use the scale controls to resize the selected object along each axis
6. **Saving Scene**: Click "Save Scene" to export your scene as a JSON file
7. **Loading Scene**: Click "Load Scene" to import a previously saved JSON file
8. **Deleting Objects**: Select an object and click "Delete Object" to remove it from the scene

## Project Structure

```
src/
├── components/
│   ├── editor/
│   │   └── ShapeEditor.tsx      # UI controls for object manipulation
│   └── scene/
│       ├── SceneCanvas.tsx      # Main 3D canvas component
│       └── GroundPlane.tsx      # Ground plane with shadow receiving
├── App.tsx                      # Main app component with state management
├── App.css                      # Styling
├── main.tsx                     # Application entry point
└── index.css                    # Global styles
```

### Component Overview

- **App.tsx**: Main application component managing scene state and object operations
- **SceneCanvas.tsx**: 3D canvas setup with lighting, controls, and object rendering
- **ShapeEditor.tsx**: UI panel for adding objects and controlling transformations
- **GroundPlane.tsx**: Simple ground plane component for shadow casting
- **Object3D**: Reusable 3D object component with selection highlighting

## Scene Data Format

Scenes are saved in JSON format with the following structure:

```json
{
  "version": "1.0",
  "timestamp": "2024-01-01T00:00:00.000Z",
  "objects": [
    {
      "id": "cube_1234567890",
      "type": "cube",
      "position": [0, 0, 0],
      "rotation": [0, 0, 0],
      "scale": [1, 1, 1],
      "color": "#ff6b35"
    }
  ]
}
```

## Known Issues & Limitations

1. **Save Empty Scene Alert**: While empty scenes are blocked from saving, the alert message could be improved with better UX feedback
2. **Component Modularity**: The 3D object rendering could be further abstracted into more reusable components for better code organization
3. **Performance Optimization**: Frame rate optimization and smooth animation transitions could be enhanced for better graphics performance

## Future Improvements

Given more time, I would focus on implementing:

1. **Grid Snapping**: Transform snapping functionality for precise object positioning
2. **Material Editor**: Color and material editing capabilities using Leva or custom UI panels
3. **Performance Optimization**: Implement smooth animations and optimize for better frame rates
4. **Enhanced UX**: More intuitive selection methods and visual feedback
5. **Component Architecture**: Better separation of concerns and more reusable components
6. **Undo/Redo System**: Action history for better user experience
7. **Multiple Selection**: Select and manipulate multiple objects simultaneously

## Learning Outcomes

This project provided valuable experience in:

- **Three.js Fundamentals**: Understanding 3D graphics concepts and Three.js API
- **React Three Fiber**: Learning the React approach to 3D development
- **TypeScript Integration**: Type-safe 3D application development
- **State Management**: Managing complex 3D scene state in React
- **File I/O Operations**: Implementing save/load functionality with JSON

## License

This project is created for educational purposes.

## Author

Ashen - [GitHub Profile](https://github.com/asheint)
