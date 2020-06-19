import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PollList = ({ polls, selectPoll }) => (
	<ListGroup>
		{polls.map((poll) => (
			<ListGroupItem key={poll.id} onClick={() => selectPoll(poll.id)} style={{ cursor: 'pointer' }}>
				{poll.title.length > 30 ? poll.title.substr(0, 30) + '...' : poll.title}
			</ListGroupItem>
		))}
	</ListGroup>
);

export default PollList;
