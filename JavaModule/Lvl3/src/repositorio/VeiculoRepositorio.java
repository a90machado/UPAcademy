package repositorio;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;
import entities.Veiculo;

public abstract class VeiculoRepositorio <T extends Veiculo>{
	
	private Map <Long,T> map = new HashMap <Long, T>();
	private long actualId=0;
	
	public void save(T veiculo){
		veiculo.setId(actualId);
		map.put(veiculo.getId(), veiculo);
		actualId++;
	}
	
	public T findById(Long id){
		return map.get(id);
	}
	
	public void removeById(Long id){
		map.remove(id);
	}
	
	public void updateById(T veiculo){
		map.replace(veiculo.getId(), veiculo);
	}
	
	public Collection<T> getAll(){
		return map.values();
	}
	
	public Map<Long, T> getMap() {
		return map;
	}
}
