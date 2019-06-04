import React from 'react';

function Title ({ name, titleClass }) {
	return (
		<h4 className={titleClass+" p-title"}>
			<b>{name}</b>
		</h4>
	);
}

export default Title;