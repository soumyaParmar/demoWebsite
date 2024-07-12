// useGSAP.js
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const useGSAP = () => {
  useEffect(() => {
    const mm = gsap.matchMedia();

    // Define the animations for desktop
    mm.add("(min-width: 768px)", () => {
      gsap.from("#service", {
        x: -100,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#service",
          scroller: "body",
          start: "top 40%",
        },
      });
      gsap.from("#values", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#values",
          scroller: "body",
          start: "top 50%",
        },
      });
      gsap.from("#CEOintroimg", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#CEOintroimg",
          scroller: "body",
          start: "top 50%",
        },
      });
      gsap.from("#CEOintroright", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#CEOintroright",
          scroller: "body",
          start: "top 50%",
        },
      });
      gsap.from("#ourTeam", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#ourTeam",
          scroller: "body",
          start: "top 50%",
        },
      });
      gsap.from("#leftVisitBlog", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#leftVisitBlog",
          scroller: "body",
          start: "top 60%",
        },
      });
      gsap.from("#rightVisitBlog", {
        x: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#rightVisitBlog",
          scroller: "body",
          start: "top 60%",
        },
      });
      gsap.from("#leftcontactUs", {
        y: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#leftcontactUs",
          scroller: "body",
          start: "top 60%",
        },
      });
      gsap.from("#rightcontactUs", {
        y: 50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#rightcontactUs",
          scroller: "body",
          start: "top 60%",
        },
      });
    });

    // Define the animations for mobile
    mm.add("(max-width: 767px)", () => {
      gsap.from("#service", {
        x: -50,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#service",
          scroller: "body",
          start: "top 40%",
        },
      });
      gsap.from("#values", {
        y: -25,
        opacity: 0,
        duration: 1,
        scrollTrigger: {
          trigger: "#values",
          scroller: "body",
        //   start: "top 10%",
        },
      });
      gsap.from("#CEOintroimg", {
        x: -25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#CEOintroimg",
          scroller: "body",
        //   start: "top 50%",
        },
      });
      gsap.from("#CEOintroright", {
        x: 25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#CEOintroright",
          scroller: "body",
        //   start: "top 50%",
        },
      });
      gsap.from("#ourTeam", {
        y: -25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#ourTeam",
          scroller: "body",
        //   start: "top 50%",
        },
      });
      gsap.from("#leftVisitBlog", {
        x: -25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#leftVisitBlog",
          scroller: "body",
        //   start: "top 60%",
        },
      });
      gsap.from("#rightVisitBlog", {
        x: 25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#rightVisitBlog",
          scroller: "body",
        //   start: "top 60%",
        },
      });
      gsap.from("#leftcontactUs", {
        y: -25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#leftcontactUs",
          scroller: "body",
        //   start: "top 60%",
        },
      });
      gsap.from("#rightcontactUs", {
        y: 25,
        opacity: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: "#rightcontactUs",
          scroller: "body",
        //   start: "top 60%",
        },
      });
    });

    return () => mm.revert();
  }, []);
};

export default useGSAP;
