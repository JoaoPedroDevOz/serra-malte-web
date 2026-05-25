// const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  element?.scrollIntoView({ behavior: "smooth" });
  //   setMobileMenuOpen(false);
};
