import TableRow from "./TableRow";

function Table({data}){
    return <table id="table">
        <thead>
            <tr>
                <th className="item" ><p id="songs">ПЕСНЯ</p></th>
                <th className="item" ><p>АРТИСТ</p></th>
                <th className="item" ><p>ЧИСЛО ПРОИГРЫВАНИИ</p></th>
                <th className="item" ><p>РАНК</p></th>
            </tr>
        </thead>
        <tbody>
            <TableRow data={data}/>
        </tbody>

    </table>
}

export default Table;