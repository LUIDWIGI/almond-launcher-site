import Head from "next/head"

const features = ()=> {
    return(
        <div>
            <Head>
                <title>
                    Almond Launcher | Features
                </title>
            </Head>
            <main>
                <div className="bg-gray-800">
                <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">All of your games on one place</h1>
      <p class="py-6">Our launcher searches for games from all the launchers on your pc and conveniently puts them in one place!</p>
    </div>
  </div>
</div>
</div>                  
<div class="hero min-h-screen bg-gray-800">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-white">Customizability</h1>
      <p class="py-6 text-white">Our launcher is completely customizable!<br/>Everything is made in CSS and you can change anything!</p>
    </div>
  </div>
</div>
<div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Mod Support</h1>
      <p class="py-6">Through our launcher you can install mods for all of your favorite games!</p>
      <a href="/mods"><button class="btn btn-primary hover:scale-110">Supported games</button></a>
    </div>
  </div>
</div>
<div class="hero min-h-screen bg-gray-800">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold text-white">Integration</h1>
      <p class="py-6 text-white">Our launcher is fully integrated with the steam API so you can track your achievements and install your favourite steam games!</p>
    </div>
  </div>
</div>
<div className="bg-gray-800">
                <div class="hero min-h-screen bg-base-200">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold">Open Source</h1>
      <p class="py-6">Our launcher is completely open source, <br/> which means you can change anything you like to your own personal needs! </p>
      <a href="https://github.com/thijnmens/Almond-launcher" target="_blank"><button class="btn btn-primary hover:scale-110">Github</button></a>
    </div>
  </div>
</div>                                              
                </div>
            </main>
        </div>
    )
    }
export default features;