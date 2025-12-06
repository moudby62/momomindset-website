export default function Daily() {
  const dailyMotivations = [
    {
      date: 'Aujourd\'hui',
      message: 'Tes cicatrices ne te définissent pas. Elles te renforcent.',
      author: 'Mohamoud',
    },
    {
      date: 'Hier',
      message: 'Le silence est souvent le cri le plus fort. Apprends à l\'écouter.',
      author: 'Mohamoud',
    },
    {
      date: 'Il y a 2 jours',
      message: 'Tu ne dois pas être aimé par tous. Tu dois être authentique pour toi.',
      author: 'Mohamoud',
    },
  ]

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Motivations quotidiennes</h1>
          <p className="text-xl text-gray-300">Un message chaque jour pour réveiller ta force</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max max-w-2xl">
          <div className="space-y-8">
            {dailyMotivations.map((item, i) => (
              <div key={i} className="bg-dark/50 border border-gold/30 p-8 rounded-lg hover:border-gold/50 transition">
                <p className="text-sm text-gold font-semibold mb-3">{item.date}</p>
                <p className="text-2xl font-bold mb-4 text-light">{item.message}</p>
                <p className="text-gray-400">— {item.author}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-gray-400 mb-6">Abonne-toi à la newsletter pour recevoir une motivation chaque semaine</p>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Ton email"
                className="flex-1 px-4 py-3 bg-dark border border-gold/30 rounded-lg text-light placeholder-gray-500 focus:outline-none focus:border-gold"
              />
              <button type="submit" className="btn-primary">
                S'abonner
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  )
}
