<<<<<<< HEAD
import ExportForm from "./ExportForm";
=======
>>>>>>> a57215a51a8df0ac978bd190486e680c05c693cd
import SoloEventList from "./SoloEventList";

function App() {
  return (
<<<<<<< HEAD
    <div className="App min-h-screen">
      <div className="mt-8">
        <h1 className="text-white text-2xl font-bold flex justify-center">Admin Pannel</h1>
      </div>


      <ExportForm />

      <div className="text-white">
        <h1 className="text-2xl font-semibold flex justify-center">Some ApI to Get data</h1><br />
        <div className="flex justify-center">
          <ul class="list-disc list-inside text-white">
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/solo/admin/eventName/Solo Dance  </li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/solo/admin/pid/P202500001</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/solo/admin/eventType/Solo Event</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/solo/admin/collegeName/SRMSCET</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/getall</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/tid/T202500001</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/pid/P202500001</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/eventName/Group Dance</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/collegeName/SRMSCETR</li><br/>
            <li>https://spandan-backend-s1d2.onrender.com/api/v2/group/admin/eventType/Group Event</li><br/>
          </ul>

        </div>


      </div>
=======
    <div className="App">
      <SoloEventList />
>>>>>>> a57215a51a8df0ac978bd190486e680c05c693cd
    </div>
  );
}
export default App;