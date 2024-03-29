const getProductDetails = (p_name) => {
  let productsList = [
    {
      p_name: "Samrani Cups",
      p_slug: "Samrani-Cups",
      description:
        "Samrani cup is designed to provide an enthralling aroma that can soothe the environment and boost positive energy. Raise your spirits and boost confidence, optimism and cheerfulness by investing in these best quality and premium dhoop cups that are long-lasting and mesmerising. They are the best antiseptic and disinfectant, anti-inflammatory. It helps in relieving stress used for treating skin infections to provide relief from respiratory conditions such as asthma and bronchitis.",
      p_img: "cups/cups_3.jpg",
      p_mrp: 99,
      p_reviews: 5,
      p_rating: 4.5,
    },
    {
      p_name: "Mosquito Repellent",
      p_slug: "Mosquito-Repellent",
      description:
        "Our mosquito repellent is crafted from Desi cow dung and infused with essential oils of eucalyptus and citronella. Mosquitoes not only produce annoying whining sounds around the ears but also spread harmful diseases. This product not only keeps mosquitoes at bay but also helps purify the air by eliminating bacteria. Consistent use of our mosquito repellent enhances the tranquility of your outdoor evenings, making them more pleasant and peaceful.",
      p_img: "mosquito/mosquito_3.jpg",
      p_mrp: 45,
      p_reviews: 22,
      p_rating: 4.9,
    },
    {
      p_name: "Panchgavya Diya",
      p_slug: "Panchgavya-Diya",
      description:
        "After they are lit, the lamp also catches fire, and the resultant smoke from it acts as a mosquito and insect repellent. The remaining ash is used as vibhuti (holy ash) and can also be used as an anti-fungicide for plants. Besides, they can be used to light lamps around the base of sacred trees like amla vriksh, raavi vriksh, and the sacred tulsi plant, etc., at the temples in auspicious months of the year since they decompose quickly and act as natural manure.",
      p_img: "diya/diya_3.jpg",
      p_mrp: 90,
      p_reviews: 89,
      p_rating: 4.3,
    },
    {
      p_name: "Temple Dhoop",
      p_slug: "Temple-Dhoop",
      description:
        "Our traditional dhoop sticks are crafted from Desi cow dung and temple flowers, making them 100% natural and non-toxic. They impart a positive aura and purify your home, workplace, and place of worship. Our dhoop sticks are meticulously hand-rolled with love and care, following the Ayurveda Panchabhuta process, using the purest herbs and dipped in essential oils. They are available in two enchanting fragrances - Kesar Chandan & Sandalwood.",
      p_img: "dhoop/dhoop_4.jpg",
      p_mrp: 190,
      p_reviews: 96,
      p_rating: 4.2,
    },
  ];

  let data = productsList.filter((e) => e?.p_slug.toLowerCase() === p_name);
  if (data.length === 0) {
    return productsList[0];
  } else {
    return data[0];
  }
};
