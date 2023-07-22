import React, {PropsWithChildren} from 'react';
import SectionContainer from './SectionContainer';
import YoutubeEmbed from '../../YoutubeEmbed';
import ArrowLink from '../../ArrowLink';

const ArtOfDarknessPreviewId = 'LlAk4d5UcQc';

const ChallengeListItem: React.FC<PropsWithChildren> = ({children}) => (
  <li className="list-group-item bg-transparent regular-text-color">{children}</li>
);

const GameDevSection: React.FC = () => (
  <SectionContainer id={'section-gamedev'} title={'Game Dev'}>
    <p>
            Around 2017, I decided to practice designing a relatively simple architecture, and nothing seemed more interesting to me than developing my own small game for mobiles.
    </p>
    <p>
            As I was working with .NET at that time, I chose Unity3D as the platform. My main priority was to put the principles of Object-Oriented Programming (OOP) and Gang of Four Design Patterns into practical use during the development process.
    </p>
    <p>
            The game was intended to be an RPG with a focus on tactical battles and procedurally generated levels. Throughout the development process, I encountered numerous challenges, and although I may not remember everything clearly now, there are several subsystems that stand out in my memory:
    </p>
    <ul className="list-group list-group-flush">
      <ChallengeListItem>
                Drawing Abilities: I implemented a controller that allowed players to draw simple shapes on the screen to use unique abilities. The challenge was to recognize the specific shapes drawn by the player.
        <p><ArrowLink href="https://github.com/saj113/art-of-darkness/tree/main/Assets/Scripts/UnitControllers/TouchControllers/ShapesRecogntions" text="ShapesRecogntions" /></p>
      </ChallengeListItem>
      <ChallengeListItem>
                Diverse Abilities: Players were meant to have various abilities, including offensive spells, buffs, debuffs, auras, summons, area-of-effect spells, magical traps, and enemy resurrection.
      </ChallengeListItem>
      <ChallengeListItem>
                Chaotic Fireballs: Players could summon multiple chaotic fireballs that hovered above their heads and followed their movements. I achieved this by implementing a geometric formula to calculate the position of each fireball in every frame.<br />
        <code>
                    var angle = (float)(i * Mathf.PI * 0.5 / orbsCount + Mathf.PI / 3);<br />
                    var orbX = playerX + Mathf.Cos(angle);<br />
                    var orbY = playerY + Mathf.Sin(angle);
        </code>
      </ChallengeListItem>
      <ChallengeListItem>
                Enemy Generation: A set of rules was designed to generate different enemies with varying positions, taking into account aspects like enemy balancing, spawn rate, player level, etc.
      </ChallengeListItem>
    </ul>
    <div className="mb-3 mt-3">
      <YoutubeEmbed embedId={ArtOfDarknessPreviewId} />
    </div>
    <p>
            I successfully developed all these features and even designed a talent system and multiple levels. However, when it came to creating animations, I lost motivation and the drive to finish the game.
    </p>
    <p>
            The source code is available on <ArrowLink href="https://github.com/saj113/art-of-darkness/tree/main" text="GitHub" />
    </p>
  </SectionContainer>
);

export default GameDevSection;
