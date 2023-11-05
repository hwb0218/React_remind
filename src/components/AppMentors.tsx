import { useState } from 'react';

const initialPerson = {
  name: '엘리',
  title: '개발자',
  mentors: [
    {
      name: '밥',
      title: '시니어개발자',
    },
    {
      name: '제임스',
      title: '시니어개발자',
    },
  ],
};

type Person = typeof initialPerson;

export default function AppMentors() {
  const [person, setPerson] = useState(initialPerson);

  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꾸고 싶은가요?') || '';
    const current = prompt('이름을 무엇으로 바꾸고 싶은가요?') || '';

    if (!prev || !current) return;

    const newPerson = (prevPerson: Person) => {
      const { mentors } = prevPerson;
      const newMentors = mentors.map((mentor) => (
        mentor.name === prev
          ? { ...mentor, name: current }
          : mentor
      ));

      return {
        ...prevPerson,
        metnors: newMentors,
      };
    };

    setPerson(newPerson);
  };

  const handleAdd = () => {
    const name = prompt('멘토의 이름은?') || '';
    const title = prompt('멘토의 직함은?') || '';
    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: [{ name, title }, ...prevPerson.mentors],
    }));
  };

  const handleDelete = () => {
    const name = prompt('누구를 삭제하고 싶은가요?');
    setPerson((prevPerson) => ({
      ...prevPerson,
      mentors: prevPerson.mentors.filter((m) => m.name !== name),
    }));
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
