export default function Resources() {
  const resources = [
    {
      title: 'Guide de la mentalité forte',
      description: 'Un guide complet pour construire une mentalité inébranlable',
      type: 'PDF',
      icon: '📄',
    },
    {
      title: 'Méditations guidées',
      description: 'Série de méditations pour calmer l\'esprit et guérir',
      type: 'Audio',
      icon: '🎧',
    },
    {
      title: 'Affirmations quotidiennes',
      description: 'Affirmations puissantes à répéter chaque jour',
      type: 'Liste',
      icon: '✨',
    },
    {
      title: 'Journal de transformation',
      description: 'Un journal pour suivre ton évolution personnelle',
      type: 'Workbook',
      icon: '📓',
    },
  ]

  return (
    <div>
      <section className="section-padding bg-gradient-to-b from-gold/10 to-dark">
        <div className="container-max">
          <h1 className="text-5xl font-bold mb-4 text-gradient">Ressources gratuites</h1>
          <p className="text-xl text-gray-300">Outils et contenus pour soutenir ta transformation</p>
        </div>
      </section>

      <section className="section-padding bg-dark">
        <div className="container-max">
          <div className="grid md:grid-cols-2 gap-8">
            {resources.map((resource, i) => (
              <div key={i} className="bg-dark/50 border border-gold/20 p-8 rounded-lg hover:border-gold/50 transition">
                <div className="text-5xl mb-4">{resource.icon}</div>
                <h3 className="text-2xl font-bold mb-2 text-gold">{resource.title}</h3>
                <p className="text-gray-300 mb-4">{resource.description}</p>
                <div className="flex justify-between items-center">
                  <span className="text-xs px-3 py-1 bg-gold/20 text-gold rounded-full">{resource.type}</span>
                  <button className="text-gold font-semibold hover:underline">Télécharger →</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
