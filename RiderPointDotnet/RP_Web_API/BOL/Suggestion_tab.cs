   namespace model;

    public class Suggestion_table{
    public int SgtnId{
        get;set;
    }
	public int Rp_id{
        get;set;
    }
	public string Suggestion{
        get;set;
    }
    public Suggestion_table(int sgtnId,int rp_id,string suggestion)
    {
        this.SgtnId=sgtnId;
        this.Rp_id=rp_id;
        this.Suggestion=suggestion;
    }
}
   
    