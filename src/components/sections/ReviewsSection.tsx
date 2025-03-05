
const ReviewsSection = () => {
  const reviews = [{
    company: "factorial",
    logo: "/lovable-uploads/e0173ab1-d37b-496d-beb5-70e272fd3499.png",
    text: [{
      content: "Improves both the ",
      highlight: false
    }, {
      content: "efficiency of our outbound salespeople and the relevance of their conversations",
      highlight: true
    }, {
      content: ", reducing the number of unwanted calls or messages and ",
      highlight: false
    }, {
      content: "improving our success rate",
      highlight: true
    }, {
      content: ". When we decided to scale our Outbound sales team, we clearly saw that there was a great product for a great challenge ahead.",
      highlight: false
    }],
    author: "Jordi Romero",
    role: "CEO & Founder"
  }, {
    company: "borneo",
    text: [{
      content: "Our ",
      highlight: false
    }, {
      content: "prospecting speed has increased exponentially",
      highlight: true
    }, {
      content: ". We're already considering it in all our new GTM strategies as we are being able to launch outbound campaigns in the US and APAC ",
      highlight: false
    }, {
      content: "without the need of hiring dedicated sales force",
      highlight: true
    }, {
      content: ".",
      highlight: false
    }],
    author: "Alberto Ercoli",
    role: "Sales Operations Manager"
  }, {
    company: "refruiting",
    text: [{
      content: "We are immensely grateful for Genesy's customer service team. In my professional career, I have never had a technology ",
      highlight: false
    }, {
      content: "partner so dedicated to client success, even in areas that don't directly contribute",
      highlight: true
    }, {
      content: " to their revenue.",
      highlight: false
    }],
    author: "Felipe Ojeda",
    role: "Chief Commercial Officer"
  }, {
    company: "sequra",
    text: [{
      content: "The platform's automation capabilities have allowed us to automate repetitive tasks and workflows, freeing up our team to focus on more strategic areas in the sales process. We've seen ",
      highlight: false
    }, {
      content: "significant time and cost savings",
      highlight: true
    }, {
      content: " since implementing the tool.",
      highlight: false
    }],
    author: "Alberto Rabadan",
    role: "SDR Manager"
  }];
  
  const getHighlightColor = (index: number) => {
    switch (index) {
      case 0:
        return 'text-[#3dc5ff] bg-[#3dc5ff]/10';
      case 1:
        return 'text-vitruve-purple bg-vitruve-purple/10';
      case 2:
        return 'text-vitruve-cyan bg-vitruve-cyan/10';
      case 3:
        return 'text-[#ffbb00] bg-[#ffbb00]/10';
      default:
        return 'text-[#ffbb00] bg-[#ffbb00]/10';
    }
  };
  
  return <div className="relative py-24 bg-white dark:bg-black transition-colors duration-200">
      <div className="absolute inset-0 bg-gradient-to-br from-vitruve-purple/20 via-transparent to-vitruve-cyan/20 dark:from-vitruve-purple/30 dark:via-black dark:to-vitruve-cyan/30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            <span className="text-gray-900 dark:text-white">Real reviews from </span>
            <br />
            <span className="text-gray-900 dark:text-white">
              real customers
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reviews.map((review, index) => <div key={index} className="bg-white/70 dark:bg-white/5 backdrop-blur-md border border-gray-200 dark:border-white/10 rounded-2xl p-6 flex flex-col justify-between transition-colors duration-200">
              <div>
                <div className="h-12 mb-6">
                  <img src={`/lovable-uploads/e0173ab1-d37b-496d-beb5-70e272fd3499.png`} alt={review.company} className="h-full" />
                </div>
                <div className="mb-6">
                  {review.text.map((segment, i) => <span key={i} className={`${segment.highlight ? `${getHighlightColor(index)} px-1 py-0.5 rounded` : 'text-gray-800 dark:text-white'}`}>
                      {segment.content}
                    </span>)}
                </div>
              </div>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{review.author}</p>
                <p className="text-sm text-gray-500 dark:text-white/70">{review.role}</p>
              </div>
            </div>)}
        </div>
      </div>
    </div>;
};

export default ReviewsSection;
