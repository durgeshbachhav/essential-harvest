import Layout from "@/components/Layout/Layout";
import Logo from "../assets/logo.svg";
import React from "react";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <Layout>
      <div className="lg:rounded-lg bg-foreground px-4 py-8 lg:px-10  lg:mx-20 lg:my-8">
        {/* <LampContainer>
          <motion.h1
            initial={{ opacity: 0.5, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              ease: "easeInOut",
            }}
            className=" bg-gradient-to-br from-slate-300 to-slate-500  bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl lg:mt-8 lg:py-4"
          >
            About Us
          </motion.h1>
        </LampContainer> */}
        <div className="flex flex-col-reverse md:flex-row md:items-center">
          <div className="md:w-1/2 md:pr-8">
            <div className="mb-8 bg-background p-4 rounded-lg">
              <h3 className="text-xl text-primary font-bold mb-2">
                Brand Commitment
              </h3>
              <p className="text-lg text-secondary-foreground">
                Our commitment is to promote wellness through our herbal
                products, supporting a healthy and sustainable lifestyle.
              </p>
            </div>
            <div className="mb-8 bg-background p-4 rounded-lg">
              <h3 className="text-xl text-primary font-bold mb-2">
                Brand Commitment
              </h3>
              <p className="text-lg text-secondary-foreground">
                Our commitment is to promote wellness through our herbal
                products, supporting a healthy and sustainable lifestyle.
              </p>
            </div>

            <div className="mb-8 bg-background p-4 rounded-lg">
              <h3 className="text-xl text-primary font-bold mb-2">
                Brand Commitment
              </h3>
              <p className="text-lg text-secondary-foreground">
                Our commitment is to promote wellness through our herbal
                products, supporting a healthy and sustainable lifestyle.
              </p>
            </div>
          </div>
          <div className="md:w-1/2">
            <img src={Logo} alt="" className="w-full" />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
