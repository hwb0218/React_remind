import { useReducer } from 'react';
import personReducer, { ACTION_TYPE, initPersonState } from '../reducers/person.reducer';

export default function AppMentors() {
  const [person, dispatch] = useReducer(personReducer, initPersonState);

  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?');
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?');

    if (!(prev && current)) {
      return;
    }

    dispatch({ type: ACTION_TYPE.UPDATED, payload: { prev, current } });
  };

  const handleAdd = () => {
    const name = prompt('멘토의 이름은?');
    const title = prompt('멘토의 직함은?');

    if (!(name && title)) {
      return;
    }

    dispatch({ type: ACTION_TYPE.ADDED, payload: { name, title } });
  };

  const handleDelete = () => {
    const name = prompt('누구를 삭제하고 싶은가요?');

    if (!name) {
      return;
    }

    dispatch({ type: ACTION_TYPE.DELETED, payload: { name } });
  };
  return (
    <div>
      <h1>
        {`${person.name}는 ${person.title}`}
      </h1>
      <p>
        {`${person.name} 의 멘토는:`}
      </p>
      <ul>
        {person.mentors.map((mentor) => {
          const key = `${mentor}-${new Date().toLocaleString()}`;
          return (
            <li key={key}>
              {`${mentor.name} (${mentor.title})`}
            </li>
          );
        })}
      </ul>
      <button type="button" onClick={handleUpdate}>멘토의 이름을 바꾸기</button>
      <button type="button" onClick={handleAdd}>멘토 추가하기</button>
      <button type="button" onClick={handleDelete}>멘토 삭제하기</button>
    </div>
  );
}
