# Professional Resume Website

A modern, responsive resume website built with React, TypeScript, and Tailwind CSS.

## LinkedIn Profile Integration

This project is designed to showcase the professional profile of **Phan Thien Quoc**.

**LinkedIn Profile**: https://www.linkedin.com/in/phan-thien-quoc

## How to Update with LinkedIn Information

To customize this resume with actual LinkedIn profile data:

1. **Personal Information** (`src/data/profileData.ts`):
   - Update `personalInfo` object with actual details from LinkedIn
   - Replace placeholder email, phone, and GitHub links
   - Update the summary with the LinkedIn profile summary

2. **Work Experience**:
   - Replace the `experiences` array with actual work history from LinkedIn
   - Include job titles, companies, dates, and descriptions
   - Add specific achievements and responsibilities

3. **Education**:
   - Update the `education` array with actual educational background
   - Include degrees, institutions, dates, and relevant achievements

4. **Skills**:
   - Modify the `skills` array based on LinkedIn skills section
   - Adjust skill levels and categories as appropriate
   - Add or remove skills based on actual expertise

5. **Projects**:
   - Replace sample projects with actual portfolio projects
   - Update GitHub links, live demo links, and project descriptions
   - Use actual project screenshots or relevant images

6. **Certifications**:
   - Add any professional certifications from LinkedIn
   - Include credential IDs and verification links where available

## Features

- **Responsive Design**: Optimized for all device sizes
- **Modern UI**: Clean, professional design with smooth animations
- **Modular Architecture**: Well-organized components and data structure
- **TypeScript**: Full type safety throughout the application
- **Performance Optimized**: Fast loading and smooth interactions

## Technologies Used

- React 18
- TypeScript
- Tailwind CSS
- Lucide React (for icons)
- Vite (build tool)

## Getting Started

1. Clone the repository
2. Install dependencies: `npm install`
3. Update the profile data in `src/data/profileData.ts`
4. Run the development server: `npm run dev`
5. Build for production: `npm run build`

## Customization

The website is highly customizable through the data files:

- `src/data/profileData.ts` - All profile information
- `src/types/profile.ts` - TypeScript interfaces
- Individual components in `src/components/` for specific sections

## Deployment

The website can be deployed to any static hosting service like:
- Netlify
- Vercel
- GitHub Pages
- AWS S3

Simply run `npm run build` and deploy the `dist` folder.