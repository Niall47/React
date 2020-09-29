import React from 'react';

const table = [
    {name: 'Geoff', wins: '2', losses: '1'},
    {name: 'Jeff', wins: '5', losses: '1'},
    {name: 'Jeffery', wins: '4', losses: '1'}
  ];

export default function LeagueTable(){
    return (
        <div>
            <h3>League Table</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Team Name</th>
                        <th>Wins</th>
                        <th>Losses</th>
                    </tr>

                </thead>
                <tbody>
                    {table.map(tableRow => {
                        return (
                            <tr>
                                <td>{tableRow.name}</td>
                                <td>{tableRow.wins}</td>
                                <td>{tableRow.losses}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
}