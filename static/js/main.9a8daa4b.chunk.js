(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{23:function(e,t,n){e.exports=n.p+"static/media/profile_pic.dff5c3b0.jpeg"},26:function(e,t,n){e.exports=n(43)},33:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),i=n(20),o=n.n(i),l=(n(33),n(1)),s=n(4),c=n(9);const m=l.b.div`
  display: flex;
  justify-content: center;
  gap: 20px; // This sets the spacing between the icons
  // Add more styling as needed
`,d=l.b.a`
  color: #fff; // Use the color you prefer
  transition: color 0.3s ease;
  &:hover {
    color: #0077b5; // Example hover color for LinkedIn, customize as needed
  }
  // Add more styling as needed
`,h=Object(l.b)(d)`
  font-weight: bold; // Makes the text bold
  font-size: 1.5em; // Sets the font size to match the icons
  display: flex; // Aligns the text properly with icons
  align-items: center; // Centers the text with icons vertically
  justify-content: center; // Centers the text horizontally (if the element has a set width)
  height: 1.5rem; // Matches the height of the FontAwesome icons
  line-height: 1; // Adjust line height to match the icons
  padding: 0.1rem 0.05rem; // Add padding to create a similar shape to the icons
`,p=Object(l.b)(d)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;var g=()=>a.a.createElement(m,null,a.a.createElement(p,{href:"https://www.linkedin.com/in/mtrivedi16/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(s.a,{icon:c.b,size:"2x"})),a.a.createElement(p,{href:"https://github.com/iamMihirT/",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(s.a,{icon:c.a,size:"2x"})),a.a.createElement(p,{href:"https://twitter.com/MihirT002",target:"_blank",rel:"noopener noreferrer"},a.a.createElement(s.a,{icon:c.c,size:"2x"})),a.a.createElement(h,{href:"https://drive.google.com/file/d/1PLWeGlkgrXupLse_jl4DLUfkjd9e64ya/view?usp=drive_link",target:"_blank",rel:"noopener noreferrer"},"CV")),u=n(23),b=n.n(u);const f=l.b.span`
  color: white; // Adjust text color
  border-bottom: 2px solid #0077b5; // Light blue underline
`;var w=e=>{let{words:t,loop:n=!0,typeSpeed:i=120,deleteSpeed:o=50,delayBetweenWords:l=1e3}=e;const[s,c]=Object(r.useState)(0),[m,d]=Object(r.useState)(0),[h,p]=Object(r.useState)(!1),[g,u]=Object(r.useState)(!0);return Object(r.useEffect)(()=>{if(m===t[s].length+1&&!h)return p(!0),u(!1),void setTimeout(()=>u(!0),l);if(0===m&&h)return p(!1),void c(e=>(e+1)%t.length);const e=setTimeout(()=>{d(e=>e+(h?-1:1))},h?o:i);return()=>clearTimeout(e)},[m,s,h,t,i,o,l]),a.a.createElement(f,null,`${t[s].substring(0,m)}${g?"|":" "}`)};const x=l.a`
  body, html {
    margin: 0;
    padding: 0;
    overflow-x: hidden; /* Prevent horizontal scroll */
  }
  /* Add other global styles here */
`,y=l.b.div`
  background-image: url('https://wallpapers.com/images/featured/new-york-city-5oaa14h4mw6w3o71.jpg');
  background-attachment: fixed; // This ensures the background stays fixed during scroll
  background-size: cover;
  background-position: center;
  height: 100vh; // This ensures that the hero container takes up the full viewport height
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  position: relative; // Child elements can be absolutely positioned relative to this
`,E=l.b.img`
  border-radius: 50%;
  width: 200px; /* Adjust as necessary */
  height: 200px; /* Maintain aspect ratio */
  border: 5px solid white; /* White border around the image */
  margin-bottom: 1rem; /* Space below the image */
`,k=l.b.h1`
  font-size: 3rem; /* Large text for the name */
  color: white; /* Text color */
  margin: 0.5rem 0; /* Spacing */
`,v=l.b.p`
  font-size: 1.5rem;
  color: white; /* Text color */
  margin: 0.5rem 0 2rem 0; /* Spacing */
`,z=l.b.div`
  color: white; /* Text color */
  font-size: 1.48rem; /* Adjust size for the typing animation */
  margin-bottom: 2rem; /* Space below the typing animation */
  display: flex;
  align-items: center;
  min-width: 300px; /* Set a fixed width large enough to hold the longest string */
  justify-content: center; /* Center the content */
  min-height: 2.1rem;
`,S=l.b.span`
  color: white;
  font-size: 1.5rem;
  margin-right: 0.5rem;
`;l.b.section`
  background-color: white; // Assuming the intro has a white background
  padding: 50px; // Adjust padding to match your design
  // Add additional styling to match the screenshot
`,l.b.h2`
  font-size: 2rem; // Adjust to match your design
  text-align: center;
  margin-bottom: 30px;
  // Add additional styling to match the screenshot
`,l.b.div`
  margin-bottom: 15px;
  // Add additional styling to match the screenshot
`;var j=()=>a.a.createElement(a.a.Fragment,null,a.a.createElement(x,null),a.a.createElement(y,{id:"home"},a.a.createElement(E,{src:b.a,alt:"Mihir Trivedi"}),a.a.createElement(k,null,"Mihir Trivedi"),a.a.createElement(v,null,"mpt2142 [at] columbia [dot] edu"),a.a.createElement(z,null,a.a.createElement(S,null,"I'm a"),a.a.createElement(w,{words:["Researcher","Coder","Swiss Army Knife"]})),a.a.createElement(g,null)));const T=l.b.section`
  background: #fff; // White background for the intro section
  padding: 50px 20px; // Adjust the padding as necessary
  font-family: 'Open Sans', sans-serif; // Assuming you're using Open Sans for the text
`,I=l.b.h2`
  font-size: 3em; // Larger size for the intro title
  text-align: center; // Center align the title
  margin-bottom: 1em; // More space below the title
  font-family: 'Raleway', sans-serif; // Raleway font for the title
  color: #212121; // Darker color for the text, if needed
  position: relative; // For the underline

  &:after {
    content: '';
    width: 50px; // Width of the underline
    height: 4px; // Thickness of the underline
    background-color: rgb(33, 150, 243); // Blue color for the underline
    position: absolute;
    left: 50%;
    bottom: -10px;
    transform: translateX(-50%);
  }
`,A=l.b.p`
  color: #333; // Dark grey color for the text
  font-size: 1.25em; // Increased font size for the text
  line-height: 1.6; // Line height for readability
  max-width: 1000px; // Adjusted max-width for less left and right space
  margin: 2em auto; // Increased top margin to add gap between title and text
`,F=l.b.a`
  color: rgb(33, 150, 243); // Blue color for links
  text-decoration: none; // No underline by default

  &:hover, &:focus {
    text-decoration: underline; // Underline on hover or focus for better accessibility
  }
`;var C=()=>a.a.createElement(T,{id:"intro"},a.a.createElement(I,null,"Intro"),a.a.createElement(A,null,"Hi, I'm Mihir, a first-year master's student in Electrical Engineering with a focus on AI at Columbia University. I'm currently seeking Summer 2025 internships where I can apply my software engineering and research skills. I'm particularly interested in machine learning applications across various industries, as well as general software engineering and analyst roles.",a.a.createElement("br",null),a.a.createElement("br",null),"My primary research interests lie in Reinforcement Learning, Natural Language Processing, and Control. Through my research, I aim to apply and optimize state-of-the-art algorithms and methods for specific niche areas, creating practical impact. My long-term goal is to work on optimizing large systems, such as trading platforms, leveraging my knowledge in these areas.",a.a.createElement("br",null),a.a.createElement("br",null),"Currently, I am working as a Research Fellow at the Max Planck Institute for Software Systems with ",a.a.createElement(F,{href:"https://binds.ch/",target:"_blank",rel:"noopener noreferrer"},"Dr. Laurent Bindschaedler")," on the augmentation of satellite images.",a.a.createElement("br",null),a.a.createElement("br",null),"During my undergraduate studies, I had the opportunity to work with ",a.a.createElement(F,{href:"https://sudeeptanwar.in/",target:"_blank",rel:"noopener noreferrer"},"Dr. Sudeep Tanwar")," on topics including reinforcement learning, energy trading algorithms, and electric vehicles.",a.a.createElement("br",null),a.a.createElement("br",null),"If you're interested in my work or would like to discuss any shared technical interests, feel free to get in touch!")),M=n(5);const L=l.b.div`
  display: flex;
  justify-content: center;
  padding: 2rem;
  max-width: 1200px;
  margin: auto;
`,U=l.b.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 2rem;
  flex: 1;
`,R=l.b.h2`
  font-size: 2rem;
  font-family: 'Raleway', sans-serif;
  text-align: left;
  position: relative;
  margin-bottom: 1rem;
  padding-bottom: 0.5rem; // Add padding to create space for the underline

  &:after {
    content: '';
    display: block;
    width: 40%;
    height: 3px;
    background-color: rgb(33, 150, 243);
    margin: 0 auto; // Center the underline horizontally
  }
`,B=l.b.ul`
  list-style: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-left: 0;
`,D=l.b.li`
  font-size: 1.1rem;
  color: black;
  margin-bottom: 0.5rem;
  align-self: flex-start;
  width: 100%;
`,O=Object(l.b)(s.a)`
  margin-right: 10px;
  color: black;
`,P=l.b.div`
  color: rgba(0, 0, 0, 0.7);
  margin-bottom: 0.5rem;
`;var _=()=>a.a.createElement(L,null,a.a.createElement(U,null,a.a.createElement(R,null,"Interests"),a.a.createElement(B,null,a.a.createElement(D,null,a.a.createElement(O,{icon:M.b,size:"sm"}),"Reinforcement Learning"),a.a.createElement(D,null,a.a.createElement(O,{icon:M.b,size:"sm"}),"Computer Vision"),a.a.createElement(D,null,a.a.createElement(O,{icon:M.b,size:"sm"}),"Sequential Decision Making"),a.a.createElement(D,null,a.a.createElement(O,{icon:M.b,size:"sm"}),"Autonomous Vehicles"))),a.a.createElement(U,null,a.a.createElement(R,null,"Education"),a.a.createElement(B,null,a.a.createElement(D,null,a.a.createElement(s.a,{icon:M.c})," MS in Electrical Engineering, AI track, 2026",a.a.createElement(P,null,"Columbia University")),a.a.createElement(D,null,a.a.createElement(s.a,{icon:M.c})," BTech in Electrical Engineering with a Minor in Computer science, 2023",a.a.createElement(P,null,"Nirma University")))));const W=l.b.section`
  background-color: #333;
  padding: 4rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`,V=l.b.h2`
  color: white;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  position: relative;
  &:after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: #2196f3;
    margin: 0 auto;
  }
`,G=l.b.div`
  background-color: #404040;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  width: 70%; /* Increase width */
  max-width: 500px; /* Increase max-width */
  margin-bottom: 1.5rem;
  text-align: center;
  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  }
`,J=l.b.img`
  height: 4rem; /* You can set the size to fit your design */
  margin-bottom: 0.5rem;
`,K=l.b.h3`
  color: white;
  font-size: 1.5rem;
  margin-bottom: 0.25rem; // Reduced space below position title
`,N=l.b.p`
  color: #ccc;
  font-style: italic;
  margin-bottom: 0.25rem; // Reduced space below location
`,X=l.b.p`
  color: #2196f3;
  margin-bottom: 0.5rem; // Adjusted space below time frame
`,$=l.b.p`
  color: white;
  font-size: 1rem;
  margin-top: 0; // Remove space above description if needed
`,q=[{companyLogoUrl:"https://www.mpi-sws.org/wp-content/themes/mpi-sws/assets/images/mpi-sws-logo.svg?ver=1.8.2",companyUrl:"https://www.mpi-sws.org/",positionTitle:"Research Intern",location:"Saarbr\xfccken, Germany",timeFrame:"March 2023 - May 2024",description:"As part of the Satellite Data Augmentation Project, I built data pipelines, utilized large language models for data augmentation, and developed the front-end for this project.",key:"mpi-sws"},{companyLogoUrl:"https://www.searce.com/assets/images/logo.svg",companyUrl:"https://www.searce.com/",positionTitle:"Data Enginner Intern",location:"Pune, India",timeFrame:"Jan 2023 - June 2023",description:"I automated data migration pipelines to facilitate seamless data transfer between various cloud servers, including Google BigQuery, AWS RDS, Teradata, and Spanner.",key:"searce"},{companyLogoUrl:"https://nirmawebsite.s3.ap-south-1.amazonaws.com/wp-content/uploads/2022/06/216X92.png",companyUrl:"https://sudeeptanwar.in/",positionTitle:"Research Intern",location:"Ahmedabad, India",timeFrame:"Sep 2021 - Jan 2023",description:"I leveraged reinforcement learning and deep learning techniques to optimize energy trading algorithms and enhance safety in electric vehicles.",key:"st-labs"}];var H=()=>a.a.createElement(W,{id:"experience"},a.a.createElement(V,null,"Experience"),q.map(e=>a.a.createElement(G,{key:e.key},a.a.createElement("a",{href:e.companyUrl,target:"_blank",rel:"noopener noreferrer"},a.a.createElement(J,{src:e.companyLogoUrl,alt:e.positionTitle})),a.a.createElement(K,null,e.positionTitle),a.a.createElement(N,null,e.location),a.a.createElement(X,null,e.timeFrame),a.a.createElement($,null,e.description))));const Y=l.b.section`
  padding: 4rem 0;
  display: flex; // Use flexbox for center alignment
  flex-direction: column;
  align-items: center; // Center the children horizontally
`,Q=l.b.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  text-align: center;
  &:after {
    content: '';
    display: block;
    width: 70px;
    height: 4px;
    background-color: #2196f3;
    margin: 0 auto;
  }
`,Z=l.b.div`
  display: grid;
  grid-template-columns: minmax(150px, 300px) 1fr;
  align-items: center;
  gap: 2rem;
  margin-bottom: 2rem;
  width: 100%; // Take the full width of the parent
  max-width: 800px; // Set a max-width for the entire card
  box-sizing: border-box; // Include padding and border in the element's total width and height
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
    gap: 1rem;
  }
`,ee=l.b.img`
  width: 100%;
  max-width: 300px; // Ensure the image does not exceed this width
  height: auto;
  border: 3px solid #888888;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
`,te=l.b.div`
  text-align: left;
`,ne=l.b.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2196f3; // Blue color for the paper title
`,re=l.b.p`
  margin-bottom: 0.5rem;
`,ae=l.b.p`
  margin-bottom: 1rem;
  font-style: italic;
`,ie=l.b.a`
  display: inline-block;
  background-color: transparent; // Transparent background
  color: 2196e3; // Blue text color
  padding: 10px 15px;
  border: 1px solid #2196f3; // Blue border
  border-radius: 5px;
  text-decoration: none;
  &:hover {
    background-color: #2196f3; // Blue background on hover
    color: white; // White text on hover
  }
`,oe=[{imageUrl:"https://www.mdpi.com/mathematics/mathematics-10-03626/article_deploy/html/images/mathematics-10-03626-g002-550.jpg",title:"Blockchain and Deep Learning-Based Fault Detection Framework for Electric Vehicles",journal:"Mathematics, MDPI 2022",authors:"Mihir Trivedi, Riya Kakkar, Rajesh Gupta, Sudeep Tanwar",paperUrl:"https://www.mdpi.com/2227-7390/10/19/3626"},{imageUrl:"https://onlinelibrary.wiley.com/cms/asset/a7519b6c-a73c-4d61-88a8-9707924a5260/etep9761157-fig-0001-m.png",title:"SV2G-ET: A Secure Vehicle-to-Grid Energy Trading Scheme Using Deep Reinforcement Learning",journal:"International Transactions on Electrical Energy Systems, Wiley 2022",authors:"Aparna Kumari, Mihir Trivedi, Sudeep Tanwar",paperUrl:"https://www.hindawi.com/journals/itees/2022/9761157/"}];var le=()=>a.a.createElement(Y,{id:"publications"},a.a.createElement(Q,null,"Publications"),oe.map((e,t)=>a.a.createElement(Z,{key:t},a.a.createElement(ee,{src:e.imageUrl,alt:e.title}),a.a.createElement(te,null,a.a.createElement(ne,null,e.title),a.a.createElement(re,null,e.journal),a.a.createElement(ae,null,e.authors),a.a.createElement(ie,{href:e.paperUrl,target:"_blank",rel:"noopener noreferrer"},"View Paper"))))),se=n(24);const ce=l.b.div`
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000; // Ensure it's above other elements
`,me=l.b.div`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(128, 128, 128, 0.5); // Light black, transparent background
  border-radius: 50%;
  cursor: pointer;
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1010;

  svg {
    color: white; // Icon color
    transition: transform 0.3s ease; // Smooth transition for icon change
  }

  &:hover {
    background: rgba(128, 128, 128, 0.7); // Darken on hover for better visibility
  }

`,de=l.b.nav`
  display: ${e=>{let{isOpen:t}=e;return t?"block":"none"}};
  position: fixed;
  top: 0;
  right: 0;
  width: 250px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  padding-top: 60px;
  z-index: 1000;
`,he=Object(l.b)(se.Link)`
  display: block;
  padding: 10px 20px;
  color: white;
  cursor: pointer;
  text-decoration: none;

  &:hover {
    background-color: rgba(255, 255, 255, 0.2);
  }
`;var pe=()=>{const[e,t]=Object(r.useState)(!1),n=()=>{t(!e)};return a.a.createElement(ce,null,a.a.createElement(me,{onClick:n},e?a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{fill:"#FFFFFF",stroke:"#FFFFFF","stroke-width":"2",d:"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"})):a.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24"},a.a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M5 7h14M5 12h14M5 17h14"}))),a.a.createElement(de,{isOpen:e},a.a.createElement(he,{to:"home",spy:!0,smooth:!0,duration:500,onClick:n},"Home"),a.a.createElement(he,{to:"intro",spy:!0,smooth:!0,duration:500,onClick:n},"About"),a.a.createElement(he,{to:"experience",spy:!0,smooth:!0,duration:500,onClick:n},"Experience"),a.a.createElement(he,{to:"publications",spy:!0,smooth:!0,duration:500,onClick:n},"Publications")))};const ge=l.b.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: transparent; // Transparent background
  border: none;
  cursor: pointer;
  z-index: 1000;
  padding: 10px;
  border-radius: 50%; // Circle shape
  box-shadow: 0 2px 5px rgba(0,0,0,0.3);
  transition: background-color 0.2s ease-in-out; // Smooth transition for background color

  &:hover {
    background-color: rgba(0,0,0,0.1); // Slight darkness on hover
  }

  &:focus {
    outline: none;
  }
`;var ue=function(){return a.a.createElement(a.a.Fragment,null,a.a.createElement(pe,null),a.a.createElement(j,null),a.a.createElement(C,null),a.a.createElement(_,null),a.a.createElement(H,null),a.a.createElement(le,null),a.a.createElement(ge,{onClick:()=>{window.scrollTo({top:0,behavior:"smooth"})}},a.a.createElement(s.a,{icon:M.a,size:"lg"})))};var be=e=>{e&&e instanceof Function&&n.e(3).then(n.bind(null,44)).then(t=>{let{getCLS:n,getFID:r,getFCP:a,getLCP:i,getTTFB:o}=t;n(e),r(e),a(e),i(e),o(e)})};o.a.createRoot(document.getElementById("root")).render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(ue,null))),be()}},[[26,1,2]]]);
//# sourceMappingURL=main.9a8daa4b.chunk.js.map