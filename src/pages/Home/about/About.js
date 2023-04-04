import React, { useContext } from "react";
import { ThemContextProvider } from "../../../context/themContext/ThemContext";
import office from "../../../assets/office.jpg";
const About = () => {
  const { dark } = useContext(ThemContextProvider);
  return (
    <div className={`${dark?'text-white':'text-black'}`}>
      <div className="hero">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left ">
            <h1 className="text-5xl font-bold">About</h1>
            <p className="py-6">
                We provide latest official phones. You can find offical and unoffical phones from us.Let's have a tour in our show room. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda harum sit nihil vero quibusdam suscipit! Optio, aliquid? Expedita, molestias at a quae similique incidunt aperiam sapiente enim vero libero animi eum deleniti asperiores quibusdam beatae, repudiandae quidem nobis. Aut voluptatum nostrum tenetur voluptatem animi laudantium, illum aliquam dicta iste aspernatur numquam perspiciatis id vitae enim doloribus molestiae eos repellat a consequatur minus ipsam cupiditate amet. Pariatur, eaque. Iure expedita ipsa, laudantium cum consectetur ea nostrum maxime velit error excepturi mollitia totam atque repellendus esse distinctio sed sint autem ex ut. Culpa temporibus eveniet odio, ullam quis corporis neque voluptas est.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div >
                <img className="h-full lg:h-96 rounded" src={office} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
