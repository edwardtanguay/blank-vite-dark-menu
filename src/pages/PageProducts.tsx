import { useParams } from 'react-router-dom';

export const PageProducts = () => {
	const { id } = useParams();

	return (
		<div className="page pageProducts">
			<p>Showing product {id}</p>
		</div>
	);
};