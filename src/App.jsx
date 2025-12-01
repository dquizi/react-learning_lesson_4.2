import { useState, useActionState } from 'react';
import { CommentsSection } from './components/CommentsSection';

const sendData = async (prevState, formData) => {

	const area = formData.get('area');

	await new Promise(resolve => setTimeout(resolve, 1000));

	return { newComment: area };
};

const App = () => {
	const [comments, setComments] = useState([]);
	const [state, submitAction, isPending] = useActionState(sendData, null);

	if (state?.newComment && !comments.includes(state.newComment)) {
		setComments(prev => [...prev, state.newComment]);
	}

	return (
		<CommentsSection submitAction={submitAction} isPending={isPending} comments={comments} />
	)
};

export default App
