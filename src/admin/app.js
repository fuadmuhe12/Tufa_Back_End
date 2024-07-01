import logo from './logo.png';

const config = {
  auth:{
    logo,
  },
  head:{
    fevicon:logo,

  },
  menu:{
    logo, 
  },
  translations:{
    en:{
      "app.components.LeftMenu.navbrand.title": "Tufah Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Workplace",
      "Auth.form.welcome.title": "Welcome to TUFAH Dashboard",
      "Auth.form.welcome.subtitle": "Please login to continue",
      "Settings.profile.form.section.experience.interfaceLanguageHelp": "Select your preferred language",


    }
  }


};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
