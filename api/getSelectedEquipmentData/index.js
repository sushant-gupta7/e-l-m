var data= [
    {id: 1, name: 'Stanley 1600kg Trolley Jack', description: 'The Stanley hydraulic garage jack range is designed for all-round performance. The products include a range of features to make work easier, such as a swivel saddle for locating, easy to carry, a rubber handle cover to prevent vehicle damage.'},
    {id: 2, name: 'Ozito OBD2 Automotive Scan Tool', description: 'This Automotive Scan Tool is ideal for troubleshooting most OBD2 compliant vehicles from 1996 onwards. Use this compact tool to read and clear Diagnostic Trouble Codes (DTC), turn off check engine light and view the vehicle information.'},
    {id: 3, name: 'Kincrome OBD2 CAN Enabled Scan Tool', description: 'The Kincrome OBD2 scan tool is an entry into diagnostic scan tools, with high quality and accuracy without the non required features of a high end workshop tool.'},
    {id: 4, name: 'Kincrome Workshop Creeper Seat', description: 'The Kincrome creeper stool is a fantastic addition to any workshop. With a huge 130kg weight capacity, and sealed ball bearing castors, you can be sure that it will be sturdy, while still being comfortable to sit on.'},
    {id: 5, name: 'Ultimate Heavy Duty Ute Tile', description: 'The Ulitmate heavy duty ute tile is perfect for a multi use application in any ute tray or tub. With its extra thick composititon and anti slip properties it will give premium protection for your cargo and tray from heavy impact situations.'},
    {id: 6, name: 'Full Boar Automotive Diagnostic Scanner', description: 'This Full Boar Automotive Diagnostic Scanner is designed for troubleshooting most OBD2 compliant vehicles from 1996 onwards. Use this compact tool to read and clear Diagnostic Trouble Codes (DTC), turn-off Check Engine Light and view the vehicle information.'},
    {id: 7, name: 'Stanley Stud Remover', description: 'The New Stanley Automotive Range. Automotive Tools are a valuable addition to any tool range. This Stanley Stud Remover allows for easy removal of studs.'},
    {id: 8, name: 'Kincrome Digital Smart Tyre Gauge', description: 'Whether you are on road or off road, the Kincrome Smart Tyre Gauge will keep you informed of your tyre pressure in all conditions. With a large back-lit digital display and LED light you can easily test your tyre pressure day or night.'},
    {id: 9, name: 'Craftright 8 Piece Mini Pick And Driver Set', description: 'Remove and replace a wide variety of things such as o-rings, snap rings, cotter pins, seals, washers, retaining clips, and springs with the Craftright 8 piece mini pick and driver set.'},
    {id: 10, name: 'Sidchrome 4000kg Hydraulic Bottle Jack', description: 'The heavy-duty Sidchrome bottle jack range is designed for all-round performance. The products include a range of features, such as a grooved steel lifting cap, polished precision fit ram, ribbed cast iron base for added strength and a patented bypass device to prevent damage from over-pumping.'},
    {id: 11, name: 'Supatool 4 Way Wheel Brace', description: 'The Supatool 4 way wheel brace allows for the loosening and tightening of the most common metric and imperial wheel nut sizes. Made from heavy duty forged steel and finished for corrosion protection.'},
    {id: 12, name: 'Stanley Harmonic Balance Puller', description: 'The New Stanley Automotive Range. Automotive Tools are a valuable addition to any tool range. Designed to allow for easy and simple removal of harmonic balancers, gear pulleys, steering wheels, and crank shaft pulleys.'}
]

module.exports = async function (context, req) {
    const { selectedId } = context.bindingData
    const newData = data.filter(function(ele){
        return (ele.id == selectedId)
     });
    context.res.json({
        data: newData
    });
}