import { useParams } from 'react-router-dom';

export const PageProducts = () => {
	const { id } = useParams();

	return (
		<div className="page pageProducts">
			<p>This is the Products page.</p>
			<p>Showing product {id}</p>
		</div>
	);
};