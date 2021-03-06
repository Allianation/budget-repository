/* eslint-disable react/prop-types */
import React, { Fragment } from 'react';
import { Grid, Icon, Segment } from 'semantic-ui-react';

const EntryLine = ({ 
	id, 
	description, 
	value, 
	isExpense = false, 
	deleteEntry,
	editEntry
}) => {
	return (
		<Fragment>
			<Segment color={isExpense ? 'red' : 'green'}>
				<Grid columns={3}>
					<Grid.Row>
						<Grid.Column width={10} textAlign='left'>{description}</Grid.Column>
						<Grid.Column width={3} textAlign='right'>{value}</Grid.Column>
						<Grid.Column width={3} textAlign='right'>
							<Icon name='edit' bordered onClick={() => editEntry(id)}></Icon>
							<Icon name='trash' bordered onClick={() => deleteEntry(id)} />
						</Grid.Column>
					</Grid.Row>
				</Grid> 
			</Segment>
		</Fragment>
	);
};

export default EntryLine;
