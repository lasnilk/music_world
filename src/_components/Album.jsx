import React from 'react'

function Album() {
  return (
    <aside>
        <section className="albumHeading">
            <h2>New album</h2>
            <h1>It was all a dream</h1>
            <a href="#" class="button-primary">Order Now</a>
        </section>
        <section>
        <table  className='songList'>
          {/* <!-- caption is for accessibility: https://developer.mozilla.org/en-US/docs/Web/HTML/Element/caption --> */}
          <caption>It Was All a Dream - Playlist</caption>
          <tr>
            <th>Track</th>
            <th>Song</th>
            <th>Time</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Casino of Tricks</td>
            <td>2:01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Life Without Wishes</td>
            <td>2:38</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Good For It All</td>
            <td>1:18</td>
          </tr>
          <tr>
            <td>4</td>
            <td>Avoiding the Messages</td>
            <td>3:22</td>
          </tr>
          <tr>
            <td>5</td>
            <td>Desperate Hands</td>
            <td>2:01</td>
          </tr>
          <tr>
            <td>6</td>
            <td>Magic Party</td>
            <td>2:43</td>
          </tr>
          <tr>
            <td>7</td>
            <td>Bombshell Looks</td>
            <td>2:13</td>
          </tr>
          <tr>
            <td>8</td>
            <td>Noise Will Come Looking</td>
            <td>2:13</td>
          </tr>
          <tr>
            <td>9</td>
            <td>Stories of Warmth</td>
            <td>3:21</td>
          </tr>
          <tr>
            <td>10</td>
            <td>Indecision</td>
            <td>2:33</td>
          </tr>
          <tr>
            <td>11</td>
            <td>A Touch Of Your Punk</td>
            <td>3:07</td>
          </tr>
          <tr>
            <td>12</td>
            <td>That Night</td>
            <td>3:03</td>
          </tr>
          <tr>
            <td>13</td>
            <td>Explosive Reality</td>
            <td>2:56</td>
          </tr>
          <tr>
            <td>14</td>
            <td>Dreams in a Nutshell</td>
            <td>5:49</td>
          </tr>
          <tr>
            <td>15</td>
            <td>Useless Knowledge</td>
            <td>2:50</td>
          </tr>
          <tr>
            <td>16</td>
            <td>Searching For The Edge</td>
            <td>2:14</td>
          </tr>
          <tr>
            <td>17</td>
            <td>Deadly Joy</td>
            <td>2:33</td>
          </tr>
          <tr>
            <td>18</td>
            <td>Riot of Boxes</td>
            <td>1:15</td>
          </tr>
        </table>
      </section>
    </aside>
  )
}

export default Album