const Socials = () => {
  const socials = [
    {
      logo: "./logo-timeline/linkedin.svg",
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/brandy-garland/",
      msg: "Connect with me on LinkedIn!",
    },
    {
      logo: "./logo-timeline/github.svg",
      name: "Github",
      url: "https://github.com/begarland",
      msg: "Check out my code on Github!",
    },
    {
      logo: "./logo-timeline/npm.svg",
      name: "npm",
      url: "https://www.npmjs.com/~begarland",
      msg: "View some old projects on npm!",
    },
  ];

  return (
    <div>
      {socials.map((social) => (
        <div
          className="flex m-5 ms-10"
          onClick={() => {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            (window as any).open(social.url, "_blank").focus();
          }}
        >
          <img src={social.logo} className="size-16 bg-white rounded-3xl" />
          <div className="flex flex-col gap-3 ms-5 text-white justify-center text-wrap">
            <h3 className="text-lg">{social.msg}</h3>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Socials;