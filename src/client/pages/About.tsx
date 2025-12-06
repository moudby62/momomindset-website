export default function About() {
  return (
    <div>
      {/* Hero */}
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Mon histoire</h1>
          <p className="text-xl text-gray-300">Comment j'ai transformé mes blessures en mission</p>
        </div>
      </section>

      {/* Story */}
      <section className="section-padding bg-dark">
        <div className="container-max max-w-3xl">
          <div className="prose prose-invert max-w-none">
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Je m'appelle <span className="text-gold font-semibold">Mohamoud Condé</span>, je suis Guinéen, et mon parcours a forgé ma mission : aider les jeunes et les adultes à trouver leur force mentale, même lorsque la vie les a brisés.
            </p>

            <h2 className="text-3xl font-bold text-gold mt-12 mb-6">L'enfance : le rejet silencieux</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Dès mon enfance, on me disait souvent que j'étais "impoli" simplement parce que je parlais avec franchise, sans peur, et en regardant les gens dans les yeux. Moi, je ne voyais pas ça comme un défaut : c'était juste ma manière d'être honnête.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Mais l'amour que je recherchais, je ne l'ai jamais vraiment trouvé. En Afrique, l'affection n'est pas toujours exprimée comme en Occident. Moi, je voulais sentir cet amour-là… mais je ne l'ai pas reçu. Alors j'ai fait ce que font beaucoup d'enfants : j'essayais d'être remarqué, accepté, apprécié. Mais au lieu de ça, plus je faisais des efforts, plus les gens s'éloignaient.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Certains me voyaient même comme une "mauvaise personne", alors que je n'étais qu'un gamin qui voulait être aimé.
            </p>

            <h2 className="text-3xl font-bold text-gold mt-12 mb-6">L'isolement : la chambre devint ma prison</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Avec le temps, ces blessures m'ont poussé à m'isoler. J'ai passé des années enfermé dans ma chambre : école, mosquée, toilette… et retour dans ma chambre. Personne ne me demandait pourquoi. Personne ne cherchait à comprendre.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              On préférait me juger, me critiquer, me diffamer.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Tout cela a laissé des traces : un cœur qui n'arrive plus à ressentir l'amour, un jeune qui observe sans se plaindre, un esprit qui a dû devenir fort, seul.
            </p>

            <h2 className="text-3xl font-bold text-gold mt-12 mb-6">La plus grande leçon de ma vie</h2>
            <div className="bg-gold/10 border-l-4 border-gold p-6 my-8">
              <p className="text-lg text-gold font-semibold mb-4">
                ➡ Ne place jamais ton espoir entièrement dans quelqu'un.
              </p>
              <p className="text-lg text-gray-300">
                Quand tu t'attends à ce qu'une personne te comprenne, te soutienne ou te rende fier… C'est souvent elle qui te fera le plus de mal.
              </p>
            </div>

            <h2 className="text-3xl font-bold text-gold mt-12 mb-6">La transformation : de la victime au guerrier</h2>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Aujourd'hui, j'ai transformé mes blessures en mission.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Je crée du contenu motivationnel pour aider ceux qui souffrent en silence : jeunes, adultes, hommes, femmes… toutes ces personnes qui pensent qu'elles ne valent rien, alors qu'elles ont une force immense en elles.
            </p>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Si mon vécu peut sauver quelqu'un, alors rien n'a été inutile.
            </p>

            <p className="text-2xl text-gold font-bold mt-12">
              Bienvenue sur MomoMindset — l'endroit où les cicatrices deviennent une puissance.
            </p>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-gradient-to-b from-dark to-dark/50">
        <div className="container-max">
          <h2 className="text-4xl font-bold text-center mb-16 text-gradient">
            Mes valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticité',
                description: 'Je partage mes vraies expériences, pas des mensonges motivationnels.',
              },
              {
                title: 'Empathie',
                description: 'Je comprends la douleur, car je l\'ai vécue. Je suis là pour toi.',
              },
              {
                title: 'Force',
                description: 'Je crois que tu as une puissance en toi, même si tu ne la vois pas.',
              },
            ].map((value, i) => (
              <div key={i} className="text-center">
                <h3 className="text-2xl font-bold text-gold mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
