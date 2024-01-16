/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `/app/studio/[[...index]]/page.tsx` route
 */

import {visionTool} from '@sanity/vision'
import { HeartFilledIcon ,LaunchIcon, RobotIcon } from '@sanity/icons'
import {defineConfig,definePlugin,LogoProps} from 'sanity'
import {deskTool} from 'sanity/desk'

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import {apiVersion, dataset, projectId} from './sanity/env'
import {schema} from './sanity/schema'
// import MyLogo from '@/components/MyLogo'
import { myTheme } from "./src/styles/theme";
import MyLogo from '@/components/MyLogo'
import StudioNavbar from '@/components/StudioNavbar'
import StudioNavbarTest from '@/components/StudioNavbarTEST'



export default defineConfig({
  basePath: '/studio',
  name: "Freetobechill",
  title: "Freetobechill",
  icon: HeartFilledIcon,
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({defaultApiVersion: apiVersion}),
    // myLogoPlugin(),
    
  ],
  studio: {
    components:{
      // navbar: StudioNavbar,
      // This is where you add custom components to the studio
      // https://www.sanity.io/docs/studio-ui/custom-components
      // logo: MyLogo,
    }
  },
  // theme: myTheme,

})
