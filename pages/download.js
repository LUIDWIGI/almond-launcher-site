import Head from "next/head"
import Image from 'next/image'

const home = ()=> {
	return(
	<div className="overflow-hidden">
		<Head>
			<title>
				Almond Launcher | Download
			</title>
		</Head>

		<main>
        <div className="hero min-h-screen my-[-35px]">
		<hr />
        <div class="hero min-h-screen bg-base-200">
  <div class="hero-content flex-col lg:flex-row">
    <img src="/almonds-5.svg" class="max-w-sm" />
    <div>
      <h1 class="text-5xl font-bold">Almond Launcher</h1>
      <p class="py-6">An universal solution for all your games!</p>
      <a href="https://github.com/thijnmens/Almond-launcher/releases/download/0.2.0/almond_launcher.Setup.0.2.0.exe"><button class="btn btn-primary my-2 hover:scale-110">Download</button></a>
      <a href="https://github.com/thijnmens/Almond-launcher/releases" target="_blank"><button class="btn btn-primary hover:scale-110">Instructions</button></a>
    </div>
  </div>
</div>
</div>
        </main>
	</div>)
}

export default home;