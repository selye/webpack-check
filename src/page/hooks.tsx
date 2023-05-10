import { useEffect, useMemo, useState } from "react";
import { Timer } from "../components/Timer";

const SearchList = () => {
  const [users, setUsers] = useState(null);
  const [searchKey, setSearchKey] = useState("");

  useEffect(() => {
    const doFetch = async () => {
      // 组件首次加载时发请求获取用户数据
      const res = await fetch("https://reqres.in/api/users/");
      setUsers(await res.json());
    };
    doFetch();
  }, []);

  const usersToShow = useMemo(() => {
    if (!users) return null;
    return users.data.filter((user: any) =>
      user.first_name.includes(searchKey)
    );
  }, [users, searchKey]);

  // let usersToShow = null;
  // if (users) {
  //   usersToShow = users.data.filter((user: any) =>
  //     user.first_name.includes(searchKey)
  //   );
  // }

  return (
    <div>
      <input
        type="text"
        value={searchKey}
        onChange={(evt) => setSearchKey(evt.target.value)}
      />
      <ul>
        {usersToShow &&
          usersToShow.length &&
          usersToShow.map((user: any) => {
            return (
              <li key={user.id}>
                <img src={user.avatar} alt="" />
                {user.first_name}
              </li>
            );
          })}
      </ul>
    </div>
  );
};

export const Hooks = () => {
  const [count, setCount] = useState<number>(0);

  const handleIncrement = () => {
    return setCount(() => count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={handleIncrement}>+</button>
      <SearchList />
      <Timer />
    </div>
  );
};
