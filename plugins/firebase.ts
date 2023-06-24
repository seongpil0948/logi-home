// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { initializeFirestore } from "firebase/firestore";
export default defineNuxtPlugin({
  name: "plugin-firebase",
  enforce: "pre", // or 'post'
  async setup(nuxtApp) {
    // TODO: Add SDKs for Firebase products that you want to use
    // https://firebase.google.com/docs/web/setup#available-libraries

    // Your web app's Firebase configuration
    const firebaseConfig = {
      apiKey: "AIzaSyB4Y4Fe7Ao4OZ3uCQ-XeEeRnU9s1V5L6fY",
      authDomain: "logione-home.firebaseapp.com",
      projectId: "logione-home",
      storageBucket: "logione-home.appspot.com",
      messagingSenderId: "173887841880",
      appId: "1:173887841880:web:3fbc4ff35796728f260c2d",
    };

    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const storage = getStorage(app);
    const store = initializeFirestore(app, {
      // experimentalAutoDetectLongPolling: isTest,
    });
    // console.info("setup plugin firebase ", nuxtApp);
    return {
      provide: {
        firebase: {
          app,
          storage,
          store,
        },
      },
    };
  },
  // hooks: {
  //   // You can directly register Nuxt app hooks here
  //   "app:created"() {
  //     const nuxtApp = useNuxtApp();
  //     //
  //   },
  // },
});
