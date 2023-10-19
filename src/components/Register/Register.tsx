

export function Register (){
    return (
        <div> 

            <div className=" w-[1848px] h-[450px] mx-24 py-6">
                <div className="mx-12 flex justify-between px-5 ">
                    <div className="flex"><span className="font-['Sora'] ml-[30px] text-[32px] font-bold">Usuários Cadastrados|</span><span className="font-['Sora'] text-[32px]">Todos</span></div>
                    
                </div>
      
                <div className="w-[1648px] mx-24 py-8">
        
                <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-green-500">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Usuário
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              E-mail
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              WhatsApp
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Especialidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Cidade
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Estado
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
              Tipo de usuário 
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {/* <!-- Linha 1 --> */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 1
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 2
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 3
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
            </tr>
            {/* <!-- Linha 2 --> */}
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 1
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 2
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 3
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                Conteúdo da Coluna 4
              </td>
            </tr>
            {/* <!-- Adicione mais linhas conforme necessário --> */}
          </tbody>
        </table>
</div>
            </div>
                
            

        </div>

    )
}