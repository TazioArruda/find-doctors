
import { ButtonNew } from "../Button/ButtonNew";
import { TableHeadPlans } from "../TablePlans/table";
import { TablePlans } from "../TablePlans/tablePlans";

export function Doctors() {
  return (
    
      <div className="w-full">
        <div id="inputSearch" className="py-4 w-full flex items-center justify-between">
          <div className="flex items-center">
            <input
              type="text"
              id="search"
              name="search"
              placeholder="Pesquise uma palavra-chave"
              className="py-4 px-3 min-w-[25rem] rounded-2xl outline-gray-200"
            />
          <div>filter</div>
          </div>
          

        <ButtonNew name={"Novo Perfil"} />
        </div>
      
      <div className="rounded-xl bg-green-800 pt-2">
        <table className="w-full rounded-xl bg-white">
          <TableHeadPlans />
          <TablePlans
            type={"Mensal"}
            value={"100"}
            promotion={"98"}
            situation={"Situações"}
            actions={"ações"}
          />
          <TablePlans
            type={"Trimestral"}
            value={"200"}
            promotion={"198"}
            situation={"Situações"}
            actions={"Ações"}
          />
          <TablePlans
            type={"Semestral"}
            value={"300"}
            promotion={"--"}
            situation={"Situações"}
            actions={"Ações"}
          />
        </table>
      </div>
    </div>
  );
}
