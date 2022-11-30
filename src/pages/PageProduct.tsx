import { useParams } from 'react-router-dom';

export const PageProduct = () => {
	const { id } = useParams();

	return (
		<div className="page pageProduct">
			<p>Showing product {id}</p>
		</div>
	);
};