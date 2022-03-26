function TableRow({data}){
    return data.map((item, index)=>(
        <tr key={index} >
          <td className="nameBlock" >
              <img className="image" src={item.image[0]["#text"]} alt="" />
              <p id="title">{item.name}</p>
          </td>
          <td>
              <p>{item.artist.name}</p>
          </td>
          <td>
              <p>{item.playcount}</p>
          </td>
          <td>
              <p>{item['@attr'].rank}</p>
          </td>
          <td id="button">
              <a href={item.url}><button className="btn">Shazam</button></a>
          </td>

        </tr>
    ))
}

export default TableRow;