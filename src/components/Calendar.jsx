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
                        <Event event='Starbucks ☕️' color='green' location='646 Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Yolk 🍳' color='green' location='355 E Ohio St'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">9 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Subway 🚊' color='blue' location='Grand Station'/>
                        <td></td>
                        <td></td>
                        <Event event='The Bean 🫘' color='blue' location='Millennium Park'/>
                    </tr>
                    <tr>
                        <td className="time">10 am</td>
                        <Event event='Shedd Aquarium 🐠' color='green' location='1200 S Lake Shore Dr'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Skydeck 🌆' color='blue' location='233 S Wacker Dr'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">11 am</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Field Museum 🦖' color='pink' location='1400 S Lake Shore Dr'/>
                        <td></td>
                        <td></td>
                        <Event event='Riverwalk 🚶' color='green' location='Chicago River'/>
                    </tr>
                    <tr>
                        <td className="time">12 pm</td>
                        <Event event='Lou Malnati’s 🍕' color='blue' location='1120 N State St'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Giordano’s 🍕' color='green' location='730 N Rush St'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">1 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Botanic Garden 🌺' color='pink' location='1000 Lake Cook Rd'/>
                        <td></td>
                        <td></td>
                        <Event event='Lincoln Park Zoo 🦒' color='blue' location='2001 N Clark St'/>
                    </tr>
                    <tr>
                        <td className="time">2 pm</td>
                        <Event event='Museum of Science 🔬' color='green' location='5700 S Lake Shore Dr'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Wrigley Field ⚾' color='pink' location='1060 W Addison St'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">3 pm</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Symphony 🎻' color='blue' location='220 S Michigan Ave'/>
                        <td></td>
                        <td></td>
                        <Event event='The Second City 🎭' color='green' location='1616 N Wells St'/>
                    </tr>
                    <tr>
                        <td className="time">4 pm</td>
                        <Event event='Oak Street Beach 🏖️' color='pink' location='1000 N Lake Shore Dr'/>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <Event event='Pizza Grinder 🍕' color='blue' location='2268 N Lincoln Ave'/>
                        <td></td>
                    </tr>
                    <tr>
                        <td className="time">5 pm</td>
                        <Event event='Dinner at The Signature 🍽️' color='blue' location='875 N Michigan Ave'/>
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