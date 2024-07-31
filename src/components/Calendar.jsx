import React from 'react';
import Event from './Event.jsx';

const Calendar = () => {
    return (
        <div className='Calendar'>
            <table>
                <thead>
                    <tr>
                        <th></th>
                        <th>Sunday</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>Saturday</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='time'>8 am</td>
                        <Event event='Starbucks ☕️' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Millennium Park 🎪' color='blue'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color='blue'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='Shedd Aquarium 🐠' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Skydeck 🌆' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Field Museum 🦖' color='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Riverwalk 🚶' color='green'/>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='Lou Malnati’s 🍕' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Giordano’s 🍕' color='green'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Botanic Garden 🌺' color='pink'/>
                        <td></td>
                        <td></td>
                        <Event event='Lincoln Park Zoo 🦒' color='blue'/>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event='Museum of Science 🔬' color='green'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Wrigley Field ⚾' color='pink'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Symphony 🎻' color='blue'/>
                        <td></td>
                        <td></td>
                        <Event event='The Second City 🎭' color='green'/>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event='Oak Street Beach 🏖️' color='pink'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Pizza Grinder 🍕' color='blue'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Dinner at The Signature 🍽️' color='blue'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>

    )
}

export default Calendar