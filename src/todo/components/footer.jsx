import { connect } from "react-redux";
import { setVisibilityFilter } from "../reducers/visibility";

const Link = ({ active, children, onClick }) => {
	if (active) {
		return <span>{children}</span>;
	}

	return (
		<button
			onClick={(e) => {
				e.preventDefault();
				onClick();
			}}
		>
			{children}
		</button>
	);
};

const mapStateToLinkProps = (state, ownProps) => {
	return {
		active: ownProps.filter === state.show,
	};
};

const mapDispatchToLinkProps = (dispatch, ownProps) => {
	return {
		onClick: () => {
			dispatch(setVisibilityFilter(ownProps.filter));
		},
	};
};

const FilterLink = connect(mapStateToLinkProps, mapDispatchToLinkProps)(Link)

let Footer = () => {
	return (
		<div>
			<p>
				<FilterLink filter="SHOW_ALL">All</FilterLink>
				{", "}
				<FilterLink filter="SHOW_ACTIVE">Active</FilterLink>
				{", "}
				<FilterLink filter="SHOW_COMPLETED">Completed</FilterLink>
			</p>
		</div>
	);
};

export default Footer;
