import React from 'react'

const Notifications = () => {

    const tips = [
        {id: 1, title: 'Lights Out', description: 'Turn off lights in any room when lights are no longer needed. Lighting accounts for 5 percent to 10 percent of total energy use; when multiplied by the number of users, the potential for waste is enormous. Make the most of natural daylight, using incandescent bulbs sparingly (they are the cheapest but least efficient light source), using task rather than general lighting, using fluorescent lighting when possible and turning off unnecessary lights.'},
        {id: 2, title: 'Replace your light bulbs', description: 'Traditional incandescent light bulbs consume an excessive amount of electricity and must be replaced more often than their energy efficient alternatives. Halogen incandescent bulbs, compact fluorescent lights (CFLs), and light-emitting diode bulbs (LEDs) use anywhere from 25-80 percent less electricity and last 3 to 25 times longer than traditional bulbs'},
        {id: 3, title: 'Computers, Photocopiers, and Printers', description: 'Turn off computers, monitors, printers and photocopiers when you leave your office for the evening. During the day, turn off your computer monitor when you leave your desk for more than a few minutes.'},
        {id: 4, title: 'Appliances', description: 'Turn off unused appliaces.'},
        {id: 6, title: 'Install a programmable or smart thermostat', description: 'A programmable thermostat can be set to automatically turn off or reduce heating and cooling during the times when you are asleep or away. When you install a programmable thermostat, you eliminate wasteful energy use from heating and cooling without upgrading your HVAC system.'},
        {id: 7, title: 'Install energy efficient windows', description: 'Windows are significant source of energy waste - they can add up to 10-25% of your total heating bill. To prevent heat loss through your windows, you can replace single-pane windows with double-pane products instead.'},
        {id: 8, title: 'Upgrade your HVAC system', description: ''},
        {id: 9, title: 'Monitor your usage', description: 'Keeping a watchful eye on your consumption levels can help you decide if and when you have to change the way you use energy.'},
        {id: 10, title: 'Insulate the roof', description: 'While insulating your loft can cost several hundreds of pounds, it can also shave around £135 off your energy bills each year if you live in a typical semi-detached building.'}
      ]

  return (
    <div className="container">
        <h3>Notifications and energy saving tips</h3>
        <ol>
            {tips.map((tip) => 
            <li key={tip.id}><strong>{tip.title}</strong> {tip.description}</li>
            )}
        </ol>
    </div>


  )
}

export default Notifications