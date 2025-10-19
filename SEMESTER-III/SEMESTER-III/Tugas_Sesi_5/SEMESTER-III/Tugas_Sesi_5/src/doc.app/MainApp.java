package doc.app;
import java.util.ServiceLoader;
import doc.core.DocumentProcessor; 

public class MainApp { 
    public static void main(String[] args){ 
        
        ServiceLoader<DocumentProcessor> loader=ServiceLoader.load(DocumentProcessor.class); 
        
        for(DocumentProcessor p:loader){ 
            System.out.println(p.getFormatName()); } } }