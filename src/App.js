import React, { useState, useEffect } from 'react';
import Header from './Header';
import GroupList from './GroupList';
import KnockoutStage from './KnockoutStage';
import TeamMatches from './TeamMatches';

const App = () => {
  const [groups, setGroups] = useState([]);
  const [knockoutStages, setKnockoutStages] = useState({});
  const [allMatches, setAllMatches] = useState([]);

  useEffect(() => {
    const fetchMatches = async () => {
      try {
        const response = await fetch('https://raw.githubusercontent.com/openfootball/world-cup.json/master/2018/worldcup.json');
        const data = await response.json();
        if (data && data.rounds) {
          const groupPoints = {};
          const knockoutStages = {};
          const allMatches = [];

          data.rounds.forEach(round => {
            round.matches.forEach(match => {
              allMatches.push(match);  // Add every match to the allMatches array

              const { team1, team2, score1, score2, group, knockout } = match;

              // Handle group stages
              if (group) {
                if (!groupPoints[group]) {
                  groupPoints[group] = {};
                }

                if (!groupPoints[group][team1.code]) {
                  groupPoints[group][team1.code] = { name: team1.name, points: 0 };
                }
                if (!groupPoints[group][team2.code]) {
                  groupPoints[group][team2.code] = { name: team2.name, points: 0 };
                }

                if (score1 > score2) {
                  groupPoints[group][team1.code].points += 3;
                } else if (score1 < score2) {
                  groupPoints[group][team2.code].points += 3;
                } else {
                  groupPoints[group][team1.code].points += 1;
                  groupPoints[group][team2.code].points += 1;
                }
              } else if (knockout) {
                // Handle knockout stages
                const stage = round.name;
                if (!knockoutStages[stage]) {
                  knockoutStages[stage] = [];
                }
                knockoutStages[stage].push(match);
              }
            });
          });

          const sortedGroups = Object.keys(groupPoints).map(group => ({
            name: group || 'Unknown Group',
            teams: Object.values(groupPoints[group]).sort((a, b) => b.points - a.points)
          }));

          setGroups(sortedGroups);
          setKnockoutStages(knockoutStages);
          setAllMatches(allMatches);  // Set all matches to state
        } else {
          console.error('No match data found in the API response.');
        }
      } catch (error) {
        console.error('Error fetching matches:', error);
      }
    };

    fetchMatches();
  }, []);

  return (
    <div>
      <Header />
      <GroupList groups={groups} />
      <KnockoutStage stages={knockoutStages} />
      <TeamMatches matches={allMatches} />
    </div>
  );
};

export default App;
