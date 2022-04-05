import Head from "next/head"
import Image from 'next/image'

const home = ()=> {
	return(
	<div className="overflow-hidden">
		<Head>
			<title>
				Almond Launcher
			</title>
		</Head>

		<main>
		<div className="hero min-h-screen my-[-35px]">
		<hr />
		<Image layout='fill' src="/Screenshot 2022-02-26 105437.png" className='blur bg-gray-800 scale-105 brightness-[0.60]'/>
			<div className="hero-overlay bg-opacity-60"></div>
			<div className="text-center hero-content text-neutral-content">
			 <div className="max-w-md">
				<h1 className="mb-5 text-5xl font-bold">Almond Launcher</h1>
				<p className="mb-5">An universal solution for all your games!</p>
				<a href="/download">
				<button className="btn bg-white text-black hover:scale-110 hover:bg-white">Download
				</button></a>
				<p className="mb-5 text-5xl font-bold"></p>
			<div className="max-w-md">
			<a href="about">
				<button className="btn bg-white hover:scale-110 text-black hover:bg-white">About
				</button></a>
			</div>  
			</div>
			</div>
		</div>
		</main>
	</div>)
}

export default home;