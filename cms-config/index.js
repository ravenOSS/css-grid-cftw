import Head from 'next/head'
import { attributes, react as HorseContent } from '../content/horses.md'
export default function Home() {
	let { title, horses } = attributes
	return (
		<>
			<Head>
				<script src='https://identity.netlify.com/v1/netlify-identity-widget.js'></script>
				<title>Horses</title> //! modify
			</Head>
			<article>
				<h1>{title}</h1>
				<HorseContent />
				<ul>
					{horses.map((horse, k) => (
						<li key={k}>
							<h2>{horse.name}</h2>
							<p>{horse.description}</p>
							<p>{horse.character}</p>
						</li>
					))}
				</ul>
			</article>
		</>
	)
}
