const imageMap = {
  1: "gouravprofile.svg",
  2: "nveencorrect.svg",
  3: "vishaltomar.svg",
  4: "sagaryadavv.svg",
  
  // Add more mappings as needed
};

export const loadImage = (id) => {
  return imageMap[id] || null;
};