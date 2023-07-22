import React from 'react';
import SectionContainer from './SectionContainer';
import solvedTotalImage from '../../../images/leetcode-solved-total.png';
import submissionsImage from '../../../images/leetcode-submissions.png';
import ArrowLink from '../../ArrowLink';

const LeetCodeSection: React.FC = () => (
  <SectionContainer id="section-leetcode" title="LeetCode">
    <p>
            Recently, I discovered LeetCode and became deeply engrossed in it, solving over 200 problems in just three months. LeetCode has proven to be an excellent tool for exercising my brain and mastering new algorithms.
    </p>
    <p>
            Nowadays, I find myself opening LeetCode almost every day, eager to solve one or two new problems. It has become an integral part of my routine, allowing me to continually improve my problem-solving abilities and expand my algorithmic knowledge.
    </p>
    <p>
            Through my consistent engagement with LeetCode, I have gained invaluable experience in algorithmic problem-solving and sharpened my JavaScript skills. It has been an exciting journey of growth, and I look forward to tackling even more challenging problems in the future.
    </p>
    <img src={solvedTotalImage} className="rounded float-start" alt="Total solved problems" />
    <img src={submissionsImage} className="rounded float-end" alt="Submissions" />
    <ArrowLink className="mt-2" href="https://leetcode.com/saj113/" text="View my LeetCode page" />
  </SectionContainer>
);

export default LeetCodeSection;
