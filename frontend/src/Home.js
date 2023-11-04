function Home() {
  return (
    <main>
      <h1>HOME</h1>
      <div className="frontpageimgdiv">
        <img
          className="frontpageimg"
          height="300"
          width="500"
          src="http://localhost:5000/images/chia-fruit-drink.jpg"
          alt="Chia Fruit Shake"
        />
      </div>
      <div className="frontpagediv">
        Photo by <a href="AUTHOR_LINK"> Brenda Godinez </a> on{" "}
        <a href="UNSPLASH_LINK"> Unsplash </a>
      </div>
      <a href="/places" className="frontpagebutton">
        <button className="frontpagebutton1">Places Page</button>
      </a>
    </main>
  );
}

export default Home;
