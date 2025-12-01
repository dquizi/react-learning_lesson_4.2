import styles from './CommentsSection.module.css';

export const CommentsSection = ({ submitAction, isPending, comments }) => {
	return (
		<>
			<ol className={styles['list-comments']}>
				{comments.map((comment, index) => (
					<li key={index}>{comment}</li>
				))}
			</ol>

			<form
				action={submitAction}  // ТОЛЬКО action
				className={styles.form}
			>
				<textarea
					name="area"
					className={styles.comment}
					placeholder="Введите комментарий"
					required
					disabled={isPending}
				/>
				<button
					type="submit"
					className={styles.button}
					disabled={isPending}
				>
					{isPending ? 'Отправка...' : 'Отправить'}
				</button>
			</form>
		</>
	);
};
